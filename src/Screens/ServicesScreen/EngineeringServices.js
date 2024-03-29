import React, {useEffect, useState} from 'react';
import {View, Image, Text, ActivityIndicator, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar, Searchbar} from 'react-native-paper';
import EServiceList from '../../Components/EServiceList';
import {grey, green} from '../../Components/PrimaryColors';
import {Icon} from 'react-native-elements';

export default function EngineeringServices({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();
  const _searchBar = () => {
    setSearchQuery('');
    setShowBar(!showBar);
    setFiltered([]);
  };


  

  useEffect(() => {
    fetch('https://roundcomm.com/demos/hirawalraven/api/engineering-service/')
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setEngineeringServiceList(res.data);
      });
  }, [engineeringServiceList]);

  const [engineeringServiceList, setEngineeringServiceList] = useState();

  const [showBar, setShowBar] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  function ScrollVieww() {
    return (
      <>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={filtered.length > 0 ? filtered : engineeringServiceList}
          renderItem={({item}) => (
            <EServiceList
              navigation={navigation}
              key={item.id}
              text={item.title}
              img={item.image}
              desc={item.description
                .replace('<p>', '')
                .replace('</p>', '')
                .replace('<br>', '')}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  }

  const onChangeSearch = (query) => {
    const filteredList = [];
    engineeringServiceList.filter((val) => {
      console.log('val.name', val.name);
      if (val.title.includes(query)) {
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
    <ScrollView>
      <View style={{height: 2, backgroundColor: 'red', width: '100%'}} />

      <Appbar.Header style={{backgroundColor: 'white', paddingLeft: 10}}>
        {/* <Appbar.Action icon="menu" color="#005D40" onPress={_navMenu} /> */}
        <Icon
          name="menu"
          type="entypo"
          color={green}
          size={40}
          onPress={_navMenu}
        />
        <Appbar.Action
          style={{marginRight: 0,marginTop:12}}
          icon={() => (
            <Image source={require('../../Images/Others/eicon.png')} />
          )}
          color={green}
        />
        <Appbar.Content
          style={{marginLeft: -10}}
          color={grey}
          title="Engineering Services"
          titleStyle={{
            fontFamily: 'AgfaRotisSansSerifExtraBold',
            fontWeight: 'bold',
          }}
        />
        <Appbar.Action
          icon="magnify"
          color="#005D40"
          onPress={_searchBar}
          size={30}
        />
      </Appbar.Header>

      {showBar && (
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      )}
      {engineeringServiceList ? (
        <ScrollVieww />
      ) : (
     
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={green} />
        </View>
      )}
    </ScrollView>
  );
}
