import React, {useState} from 'react';
import {View, Text,Image} from 'react-native';
import ListComponent from './ListComponent';
import {Divider, Appbar, TouchableRipple, Searchbar} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';

export default function ProductsListItems({route, navigation}) {
  const items = route.params.items;
  const name = route.params.name;
  const desc = route.params.desc;

  const _searchBar = () => {
    setSearchQuery('');
    setShowBar(!showBar);
    setFiltered([]);
  };



  const [showBar, setShowBar] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  function ScrollVieww() {
    return (
      <>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={filtered.length > 0 ? filtered : items}
          renderItem={({item}) => (
            <View>
              <TouchableRipple
                rippleColor="rgba(0, 0, 0, .82)"
                onPress={() =>
                  navigation.navigate('ProductsItemDesc', {
                    item,
                    name,
                    desc,
                  })
                }
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
          )}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  }

  const onChangeSearch = (query) => {
    const filteredList = [];
    items.filter((val) => {
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
      <View style={{height: 2, backgroundColor: 'red', width: '100%'}} />

      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Action
          icon={() => (
            <Image source={require('../HDIcons/back.png')} />
          )}
          color="#005D40"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content style={{marginLeft: 0}} color="#4e4e4f" title={name} />
        <Appbar.Action icon="magnify" color="#4e4e4f" onPress={_searchBar} />
      </Appbar.Header>

      {showBar && (
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      )}

      {items.length > 0 ? (
        <ScrollVieww />
      ) : (
        <Text>No Favourites</Text>
      )}
    </>
  );
}
