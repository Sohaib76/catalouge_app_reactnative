import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ProductsList from '../../Components/ProductsList';
import AppbarHeader from '../../Components/AppbarHeader';
import {Text, View, ActivityIndicator, RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Divider, TouchableRipple} from 'react-native-paper';
import ListComponent from '../../Components/ListComponent';
import {green, grey} from '../../Components/PrimaryColors';
import {Button, IconButton, Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {Input} from 'react-native-elements';
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
  // const [products, setProducts] = useState();
  const [favs, setFavs] = useState([]);
  const [message, setMessage] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  let values;

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [doneFetch, setDoneFetch] = useState(false);

  useEffect(() => {
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
    // setDoneEffect(true)
  }, [message]);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const [noFavs, setNoFavs] = useState(false);
  // const [DoneEffect, setDoneEffect] = useState(false);

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

  // function ScrollVieww() {
  //   return (
  //     <ScrollView
  //       style={{backgroundColor: 'white'}}
  //       refreshControl={
  //         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  //       }>
  //       {noFavs ? (
  //         <View
  //           style={{
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             height: '100%',
  //             paddingTop: 200,
  //           }}>
  //           <Text style={{textAlign: 'center', fontSize: 20, color: grey}}>
  //             No Favourites
  //           </Text>
  //         </View>
  //       ) : (
  //         favs.map((product, id) => (
  //           <View key={id}>
  //             <TouchableRipple
  //               onPress={() => console.log('Press')}
  //               rippleColor="rgba(0, 0, 0, .92)"
  //               style={{
  //                 display: 'flex',
  //                 flexDirection: 'row',
  //                 alignItems: 'center',
  //                 padding: 10,
  //               }}>
  //               <ListComponent
  //                 name={product.name}
  //                 img={product.product_images[0].image}
  //               />
  //             </TouchableRipple>
  //             <Divider style={{elevation: 3}} />
  //           </View>
  //         ))
  //       )}
  //     </ScrollView>
  //   );
  // }
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
                    onPress={() => console.log('Press')}
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

  // handleSearch = (text) => {
  //   const formattedQuery = text.toLowerCase();
  //   const data = filter(this.state.fullData, (user) => {
  //     return this.contains(user, formattedQuery);
  //   });
  //   this.setState({data, query: text});
  // };

  const [query, setQuery] = useState('');

  // handleSearch = (text) => {
  //   const formattedQuery = text.toLowerCase();
  //   setQuery(text);
  // };

  const [searchQuery, setSearchQuery] = React.useState('');

  // const onChangeSearch = (query) => {
  //   setSearchQuery(query);
  //   const names = ['abc', 'jfc'];
  //   const filtered = [];
  //   names.filter((name) => {
  //     if (name.includes(query)) {
  //       filtered.push(name);
  //     }
  //   });
  //   console.log('Filtered', filtered);
  // };

  const contains = (val, query) => {
    console.log('Inside if', val);
    // if (val.includes(query)) {
    //   return true;
    // }
    // return false;
  };

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
      // contains(val, formattedQuery);
    });
    setSearchQuery(query);
    setFiltered(filteredList);
    console.log('Filtered', filteredList);
    // setFiltered(data);
  };

  const handleSearch = (text) => setQuery(text);

  function RenderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Searchbar
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setQuery(text)}
          // status="info"
          placeholder="Search"
          style={{
            borderRadius: 25,
            borderColor: '#333',
            backgroundColor: '#fff',
          }}
          textStyle={{color: '#000'}}
          value={query}
        /> */}
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    );
  }
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

      {/* {favs.length == 0 && <Text>No Favourites</Text>} */}
      {showBar && (
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      )}

      {/* {<RenderHeader />} */}
      {doneFetch ? (
        // {(favs.length > 0) ? console.log(): console.log()}

        <ScrollVieww />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={green} />
        </View>
      )}
    </>
  );
}
