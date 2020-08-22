import React from 'react';
import {View, Image, Linking} from 'react-native';
import {Drawer, Divider, FAB, IconButton, Button} from 'react-native-paper';
import {green} from './PrimaryColors';
import {ScrollView} from 'react-native-gesture-handler';

export default function CustomDrawerContent({navigation}) {
  return (
    <ScrollView>
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Home')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: -25}}
            icon="home-variant-outline"
            color={green}
            size={22}
          />
        )}
        label="Home"
      />
      <Divider />

      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Products')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: -25}}
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
            style={{marginLeft: 0, marginRight: -25}}
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
            style={{marginLeft: 0, marginRight: -25}}
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
        onPress={() => navigation.navigate('Locations')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: -25}}
            icon="earth"
            color={green}
            size={22}
          />
        )}
        label="Locations"
      />
      <Divider />
      <Drawer.Item
        style={{padding: 1}}
        onPress={() => navigation.navigate('Favourites')}
        icon={() => (
          <IconButton
            style={{marginLeft: 0, marginRight: -25}}
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
            style={{marginLeft: 0, marginRight: -25}}
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
            style={{marginLeft: 0, marginRight: -25}}
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
          onPress={() =>
            Linking.openURL('https://www.facebook.com/HiraWalraven/')
          }
        />
        <FAB
          style={{backgroundColor: 'red'}}
          small
          icon="youtube"
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/channel/UCqH-4meI8X2giZMHO-Y1idQ',
            )
          }
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
          onPress={() =>
            Linking.openURL('https://www.instagram.com/hirawalraven/')
          }
        />

        <FAB
          style={{backgroundColor: '#2867B2'}}
          small
          icon="linkedin"
          onPress={() =>
            Linking.openURL('https://ae.linkedin.com/in/diamondwalraven')
          }
        />
      </View>
    </ScrollView>
  );
}
