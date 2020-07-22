import React, {useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import ListComponent from './ListComponent';
import {Divider, Appbar, TouchableRipple} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

export default function ProductsListItems({route, navigation}) {
  const items = route.params.items;
  const name = route.params.name;

  const [fav, setfav] = useState(items[0].isFavourite);

  const markFavourite = () => {
    setfav(!fav);
  };

  {
    console.log('Product List Item Render', fav);
  }

  return (
    <>
      <View style={{height: 2, backgroundColor: 'red', width: '100%'}} />

      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Action
          icon="keyboard-backspace"
          color="#005D40"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content style={{marginLeft: 0}} color="#4e4e4f" title={name} />
        <Appbar.Action icon="magnify" color="#4e4e4f" />
      </Appbar.Header>
      <ScrollView style={{backgroundColor: 'white'}}>
        {items.map((item, id) => (
          <View key={id}>
            <TouchableRipple
              rippleColor="rgba(0, 0, 0, .82)"
              onPress={() =>
                navigation.navigate('ProductsItemDesc', {
                  item,
                  name,
                  // markFavourite,
                })
              }
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ListComponent name={item.name} img={item.iconImage} />
            </TouchableRipple>
            <Divider style={{elevation: 3}} />
          </View>
        ))}
      </ScrollView>
    </>
  );
}
