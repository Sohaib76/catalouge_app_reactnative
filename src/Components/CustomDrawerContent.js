import React from 'react';
import {View, Text} from 'react-native';
import {Drawer, Divider, FAB, IconButton} from 'react-native-paper';

export default function CustomDrawerContent({navigation}) {
  return (
    <>
      <Drawer.Item
        style={{padding: 13}}
        onPress={() => navigation.navigate('Products')}
        icon="briefcase-variant"
        label="Products"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 13}}
        onPress={() => navigation.navigate('Downloads')}
        icon="download"
        label="Downloads"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 13}}
        onPress={() => navigation.navigate('Videos')}
        icon="play-circle"
        label="Videos"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 13}}
        onPress={() => navigation.navigate('Contact Us')}
        icon="phone"
        label="Contact Us"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 13}}
        onPress={() => navigation.navigate('Favourites')}
        icon="star"
        label="Favourites"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 13}}
        onPress={() => navigation.navigate('Engineering Services')}
        icon="star"
        label="Engineering Services"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 13}}
        onPress={() => navigation.navigate('More Information')}
        icon="alert-circle-outline"
        label="More Information"
      />
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: 20,
        }}>
        <FAB
          small
          style={{backgroundColor: '#3b5998'}}
          icon="facebook"
          onPress={() => console.log('Pressed')}
        />
        <FAB
          style={{backgroundColor: '#C13584'}}
          small
          icon="instagram"
          onPress={() => console.log('Pressed')}
        />
        <FAB
          style={{backgroundColor: '#2867B2'}}
          small
          icon="linkedin"
          onPress={() => console.log('Pressed')}
        />
      </View>
    </>
  );
}
