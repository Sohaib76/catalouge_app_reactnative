import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
// import MapView from 'react-native-maps';
import {Picker} from '@react-native-community/picker';
import {Searchbar} from 'react-native-paper';
import {grey, green} from '../../Components/PrimaryColors';
import AppbarHeader from '../../Components/AppbarHeader';
import {ScrollView} from 'react-native-gesture-handler';

export default function Locations({navigation}) {
  // const _navMenu = () => navigation.toggleDrawer();

  const [selectedValue, setSelectedValue] = useState('Search');
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <AppbarHeader
        // _navMenu={_navMenu}
        heading={selectedValue}
        iconName="map-marker"
      />

      <ScrollView>
        <View
          style={{
            margin: 10,
            marginTop: 12,
            borderRadius: 10,
            backgroundColor: 'white',
            elevation: 3,
          }}>
          <Picker
            selectedValue={selectedValue}
            style={{
              borderWidth: 10,

              padding: 25,
              marginLeft: 3,
              marginRight: 10,
              height: 50,
              width: '100%',
              borderColor: 'red',
            }}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item
              color={grey}
              label="Global Corporate Offices"
              value="Global Corporate Offices"
            />
          </Picker>
        </View>

        <View
          style={{
            margin: 10,
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: 'white',
          }}>
          <Searchbar
            style={{padding: 5}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <View
          style={{
            resizeMode: 'stretch',
            height: 420,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../Images/Others/map.png')} />
        </View>
        <View style={{margin: 15, marginLeft: 30}}>
          <Text
            style={{
              fontSize: 18,
              color: green,
              fontWeight: 'bold',
            }}>
            Hira Walraven AC Industry LLC
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: grey,
            }}>
            P.O. Box 241579
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: grey,
            }}>
            Dubai, United Arab Emirates
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: grey,
            }}>
            Email: enquiry@hirawalraven.com
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: grey,
            }}>
            Mob: +971 4 882 1114{' '}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
