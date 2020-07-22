import React from 'react';
import {View, Text, Image} from 'react-native';
import {Drawer, Divider, FAB, IconButton, Button} from 'react-native-paper';
import {green} from './PrimaryColors';

export default function CustomDrawerContent({navigation}) {
  return (
    <>
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Products')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: 0}}
            icon="briefcase-variant"
            color={green}
            size={22}
          />
        )}
        label="Products"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Downloads')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: 0}}
            icon="download"
            color={green}
            size={22}
          />
        )}
        label="Downloads"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Videos')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: 0}}
            icon="play-circle"
            color={green}
            size={22}
          />
        )}
        label="Videos"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Contact Us')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: 0}}
            icon="phone"
            color={green}
            size={22}
          />
        )}
        label="Contact Us"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Favourites')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: 0}}
            icon="star"
            color={green}
            size={22}
          />
        )}
        label="Favourites"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Engineering Services')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: 0}}
            icon={require('.././Images/Others/eicon.png')}
            color={green}
            size={22}
          />
        )}
        label="Engineering Services"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('More Information')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: 0}}
            icon="alert-circle-outline"
            color={green}
            size={22}
          />
        )}
        label="More Information"
      />
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: 20,
          marginTop: 40,
        }}>
        <FAB
          small
          style={{backgroundColor: '#3b5998'}}
          icon="facebook"
          onPress={() => console.log('Pressed')}
        />
        <FAB
          style={{
            backgroundColor: '#FCAF45',
          }}
          small
          icon={() => (
            <Image
              style={{
                marginTop: -7,
                width: 48,

                resizeMode: 'contain',

                height: 40,
                alignSelf: 'center',
              }}
              source={require('.././Images/Others/insta.png')}
            />
          )}
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
