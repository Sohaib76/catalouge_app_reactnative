import React, {useState, useEffect} from 'react';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import ProductsList from '../../Components/ProductsList';
import AppbarHeader from '../../Components/AppbarHeader';
import {Text, View, ActivityIndicator, RefreshControl} from 'react-native';
import {green} from '../../Components/PrimaryColors';
import {Button, IconButton, Searchbar} from 'react-native-paper';

export default function Products({navigation}) {
  // const fav = route.params.fav;

  const _navMenu = () => navigation.toggleDrawer();
  const _searchBar = () => {
    setSearchQuery('');
    setShowBar(!showBar);
    setFiltered([]);
  };

  console.log('Products Render');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://roundcomm.com/demos/hirawalraven/api/category/')
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, []);

  const [showBar, setShowBar] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  function ScrollVieww() {
    return (
      <>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={filtered.length > 0 ? filtered : products}
          renderItem={({item}) => (
            <ProductsList
              key={item.id}
              name={item.name}
              img={item.image}
              items={item.products}
              desc={item.description}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  }

  const onChangeSearch = (query) => {
    const filteredList = [];
    products.filter((val) => {
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
        iconName={'briefcase-variant'}
        heading={'Products'}
        _navMenu={_navMenu}
        _searchBar={_searchBar}
      />
      {showBar && (
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      )}
      {products.length > 0 ? (
        <ScrollVieww />
      ) : (
   
    
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={green} />
        </View>
      )}
    </>
  );
}
