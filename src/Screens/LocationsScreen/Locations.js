import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import MapView from 'react-native-maps';
import {Picker} from '@react-native-community/picker';
import {Searchbar} from 'react-native-paper';
import {grey, green} from '../../Components/PrimaryColors';
import AppbarHeader from '../../Components/AppbarHeader';
import {ScrollView} from 'react-native-gesture-handler';

import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function Locations({navigation}) {
  const [lat, setlat] = useState(24.924415);
  const [long, setlong] = useState(55.057513);
  // const _navMenu = () => navigation.toggleDrawer();

  const [selectedValue, setSelectedValue] = useState('Search');
  const [searchQuery, setSearchQuery] = useState('');
  //https://github.com/itzpradip/Food-Finder-React-Native-App/blob/master/screens/MapTestScreen.js
  const onChangeSearch = (query) => setSearchQuery(query);

  const dropDownClicked = (itemValue) => {
    setSelectedValue(itemValue);
    setlat(24.924415);
    setlong(55.06);
  };

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
              dropDownClicked(itemValue)
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

        {/* <View
          style={{
            resizeMode: 'stretch',
            height: 420,
            justifyContent: 'center',
            alignItems: 'center',
          }}> */}
        <View style={{flex: 1, backgroundColor: 'red', height: 380}}>
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
              // description={'desc'}
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
    // resizeMode: 'stretch',
    // height: 420,
    // justifyContent: 'center',
    // alignItems: 'center',
    // ...StyleSheet.absoluteFillObject,
  },
});
