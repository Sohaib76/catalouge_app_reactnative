import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Searchbar} from 'react-native-paper';
import {grey, green} from '../../Components/PrimaryColors';
import AppbarHeader from '../../Components/AppbarHeader';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function Locations({navigation}) {
  const [lat, setlat] = useState(24.924415);
  const [long, setlong] = useState(55.057513);
  const _navMenu = () => navigation.toggleDrawer();

  const _searchBar = () => {
    navigation.navigate('Products');
  };

  const [selectedValue, setSelectedValue] = useState('Search');
  const [searchQuery, setSearchQuery] = useState('');
  //https://github.com/itzpradip/Food-Finder-React-Native-App/blob/master/screens/MapTestScreen.js
  const onChangeSearch = (query) => setSearchQuery(query);

  const dropDownClicked = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
    if (itemValue == 'Global Corporate Offices') {
      setlat(19.107029);
      setlong(72.881736);
      
    }
    if (itemValue == 'RAK - UAE') {
      setlat(25.384369);
      setlong(55.980387);
     
    }
    if (itemValue == 'Abu Dhabi - UAE') {
      setlat(24.375706);
      setlong(54.496087);
     
    }
    if (itemValue == 'Dubai - UAE') {
      setlat(24.924429);
      setlong(55.057431);
    
    }
    if (itemValue == 'Saudi Arabia') {
      setlat(24.710976);
      setlong(46.693969);
    }
   


  };


  return (
    <>
      <AppbarHeader
        _navMenu={_navMenu}
        heading={selectedValue}
        iconName="map-marker"
        _searchBar={_searchBar}
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
              dropDownClicked(itemValue, itemIndex)
            }>
            <Picker.Item color={grey} label="Dubai - UAE" value="Dubai - UAE" />
            <Picker.Item
              color={grey}
              label="India"
              value="Global Corporate Offices"
            />

            <Picker.Item color={grey} label="RAK - UAE" value="RAK - UAE" />
            <Picker.Item
              color={grey}
              label="Abu Dhabi - UAE"
              value="Abu Dhabi - UAE"
            />

            <Picker.Item
              color={grey}
              label="Saudi Arabia"
              value="Saudi Arabia"
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
          <TouchableWithoutFeedback
            style={{width: '100%'}}
            onPress={() => Linking.openURL('https://maps.google.com')}>
            <Searchbar
              style={{padding: 5}}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </TouchableWithoutFeedback>
        </View>

       
        <View style={{flex: 1, height: 380}}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.0015, //0.015
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{
                latitude: lat,
                longitude: long,
              }}
              title={'Hira Walraven LLC'}
              
            />
          </MapView>
        </View>
        {/* </View> */}
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

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: '100%',

  },
});
