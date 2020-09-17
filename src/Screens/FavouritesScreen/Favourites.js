import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import AppbarHeader from '../../Components/AppbarHeader';
import {Text, View, ActivityIndicator, RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Divider, TouchableRipple} from 'react-native-paper';
import ListComponent from '../../Components/ListComponent';
import {green, grey} from '../../Components/PrimaryColors';
import { Searchbar} from 'react-native-paper';
import {FlatList} from 'react-native';

export default function Favourites({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  const _searchBar = () => {
    setSearchQuery('');
    setShowBar(!showBar);
    setFiltered([]);
  };

  var theList = [];
  var theListHavingObjects = [];

  console.log('Favourite Render');

  const [favs, setFavs] = useState([]);
  const [message, setMessage] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [doneFetch, setDoneFetch] = useState(false);
  const [noFavs, setNoFavs] = useState(false);

  let values;

  useEffect(() => {
    // alert('Rerenders!!!');
    setDoneFetch(false);
    fetch('https://roundcomm.com/demos/hirawalraven/api/category/')
      .then((response) => response.json())
      .then((res) => {
        res.data.map((prod) => {
          prod.products.map((product) => {
            theList.push(product.name);
          });
        });

        const getMultiple = async () => {
          try {
            values = await AsyncStorage.multiGet(theList);

            values.map((val) => {
              try {
                theObjectValue = JSON.parse(val[1]);
                console.log('values', theObjectValue.name);
                theListHavingObjects.push(theObjectValue);
              } catch {
                theObjectValue = null;
                console.log('values', theObjectValue);
              }
            });
          } catch (e) {
            console.log(e);
          }
          setDoneFetch(true);
          theListHavingObjects.length == 0 && setNoFavs(true);
          theListHavingObjects.length > 0 && setNoFavs(false);
          setFavs(theListHavingObjects);
        };
        getMultiple();
      });
    const unsubscribe = navigation.addListener('focus', () => {
      const massage = message + 1;
      setMessage(massage);
    });

    return unsubscribe;
  }, [message]); //message,navigation

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  handleClick = () => {
    console.log('Message', message);
    const massage = message + 1;
    setMessage(massage);
    console.log('Massage', message);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    handleClick();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [filtered, setFiltered] = useState([]);
  function ScrollVieww() {
    return (
      <>
        {noFavs ? (
          <ScrollView
            style={{height: '100%'}}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '90%',

                paddingTop: 200,
              }}>
              <Text style={{textAlign: 'center', fontSize: 20, color: grey}}>
                No Favourites
              </Text>
            </View>
          </ScrollView>
        ) : (
          <FlatList
            style={{backgroundColor: 'white'}}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={filtered.length > 0 ? filtered : favs}
            renderItem={({item}) => (
              <>
                <View>
                  <TouchableRipple
                  onPress={() =>
                    navigation.navigate('ProductsItemDesc', {
                      item,
                      name:item.name,
                      desc:"test",
                    })
                  }
                    // onPress={() => console.log(item)}
                    rippleColor="rgba(0, 0, 0, .92)"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <ListComponent
                      name={item.name}
                      img={item.product_images[0].image}
                    />
                  </TouchableRipple>
                  <Divider style={{elevation: 3}} />
                </View>
              </>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </>
    );
  }



  const [searchQuery, setSearchQuery] = React.useState('');


  const onChangeSearch = (query) => {
    const filteredList = [];
    const formattedQuery = query.toLowerCase();
    favs.filter((val) => {
      console.log('val.name', val.name);
      if (val.name.includes(query)) {
        console.log('Got Match', query);
        filteredList.push(val);
      } else {
        console.log('No Match');
      }
  
    });
    setSearchQuery(query);
    setFiltered(filteredList);
    console.log('Filtered', filteredList);
    
  };



  return (
    <>
      <AppbarHeader
        iconName={'star'}
        heading={'Favourites'}
        _navMenu={_navMenu}
        _searchBar={_searchBar}
      />
      {console.log('return fav', favs)}
      {console.log('return theListHaving', theListHavingObjects)}

     
      {showBar && (
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      )}

      
      {doneFetch ? (
    

        <ScrollVieww />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={green} />
        </View>
      )}
    </>
  );
}
