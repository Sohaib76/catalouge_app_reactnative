import React, {useState, useEffect} from 'react';
import {View, Text, Linking, ActivityIndicator} from 'react-native';
import AppbarHeader from '../../Components/AppbarHeader';
import {IconButton, Divider, Searchbar} from 'react-native-paper';
import {green} from '../../Components/PrimaryColors';
import {FlatList} from 'react-native-gesture-handler';

export default function Downloads({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();
  const _searchBar = () => {
    setSearchQuery('');
    setShowBar(!showBar);
    setFiltered([]);
  };
 

  useEffect(() => {
    fetch('https://roundcomm.com/demos/hirawalraven/api/download/')
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setDownloadsList(res.data);
        console.log('state', downloadsList);
      });
  }, [downloadsList]);

  const [downloadsList, setDownloadsList] = useState();

  const downloadFunc = (url) => {
    Linking.openURL(url);

    console.log('Downloaded');
  };
  console.log('Downloads Rendered');

  const [showBar, setShowBar] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  function ScrollVieww() {
    return (
      <>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={filtered.length > 0 ? filtered : downloadsList}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 20,
                    color: '#4e4e4f',
                    padding: 20,
                  }}>
                  {item.title}
                </Text>
                <IconButton
                  style={{flex: 0}}
                  icon="download"
                  color={green}
                  size={25}
                  onPress={() => downloadFunc(item.file)}
                />
              </View>
              <Divider style={{backgroundColor: 'black', elevation: 3}} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  }

  const onChangeSearch = (query) => {
    const filteredList = [];
    downloadsList.filter((val) => {
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
    <>
      <AppbarHeader
        _navMenu={_navMenu}
        iconName="download"
        heading="Download"
        _searchBar={_searchBar}
      />

      {showBar && (
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      )}
      {downloadsList ? (
        <ScrollVieww />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={green} />
        </View>
      )}
    </>
  );
}
