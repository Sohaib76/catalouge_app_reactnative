import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ProductsList from '../../Components/ProductsList';
import AppbarHeader from '../../Components/AppbarHeader';
import {Text, View, ActivityIndicator, RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Divider, TouchableRipple} from 'react-native-paper';
import ListComponent from '../../Components/ListComponent';
import {green} from '../../Components/PrimaryColors';

export default function Favourites({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  var theList = [];
  var theListHavingObjects = [];

  console.log('Favourite Render');
  // const [products, setProducts] = useState();
  const [favs, setFavs] = useState();

  let values;

  useEffect(() => {
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
          setFavs(theListHavingObjects);
        };
        getMultiple();
      });
  }, [favs]);
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <AppbarHeader
        iconName={'star'}
        heading={'Favourites'}
        _navMenu={_navMenu}
      />

      {favs ? (
        <ScrollView style={{backgroundColor: 'white'}}>
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          {favs.map((product, id) => (
            <View key={id}>
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
                  name={product.name}
                  img={product.product_images[0].image}
                />
              </TouchableRipple>
              <Divider style={{elevation: 3}} />
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={green} />
        </View>
      )}
    </>
  );
}
