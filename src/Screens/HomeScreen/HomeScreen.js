import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Appbar} from 'react-native-paper';
import HomeCard from '../../Components/HomeCard';

export default function HomeScreen({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  return (
    <View style={{flex: 1}}>
      <Appbar.Header
        style={{
          backgroundColor: '#005D40',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Appbar.Action icon="menu" color="#fff" onPress={_navMenu} />
        <View>
          <Image
            source={require('../../Images/homeImages/logoname.png')}
            style={{
              width: 60,
              height: 20,
              resizeMode: 'stretch',
            }}
          />
        </View>

        <Appbar.Action icon="magnify" color="#fff" onPress={_navMenu} />
      </Appbar.Header>

      <View style={{flex: 1}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
            height: '100%',
          }}>
          <View
            style={{
              flex: 2,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <HomeCard
              img={require('../../Images/homeImages/logo.png')}
              text="PRODUCTS"
              txtColor="white"
              bgColor="#005D40"
              navigation={navigation}
              navigateTo="Products"
            />
            <HomeCard
              img={require('../../Images/homeImages/location.png')}
              text="LOCATIONS"
              txtColor="#005D40"
              bgColor="white"
              navigation={navigation}
              navigateTo="Locations"
            />
          </View>

          <View
            style={{
              flex: 2,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <HomeCard
              img={require('../../Images/homeImages/star.png')}
              text="FAVOURITE LIST"
              txtColor="#005D40"
              bgColor="white"
              navigation={navigation}
              navigateTo="Favourites"
            />
            <HomeCard
              img={require('../../Images/homeImages/download.png')}
              text="DOWNLOAD"
              txtColor="#005D40"
              bgColor="white"
              navigation={navigation}
              navigateTo="Downloads"
            />
          </View>

          <View
            style={{
              flex: 2,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <HomeCard
              img={require('../../Images/homeImages/call-center.png')}
              text="CONTACT US"
              txtColor="#005D40"
              bgColor="white"
              navigation={navigation}
              navigateTo="Contact Us"
            />
            <HomeCard
              img={require('../../Images/homeImages/pair-of-gears.png')}
              text="ENGINEERING SERVICES"
              txtColor="#005D40"
              bgColor="white"
              navigation={navigation}
              navigateTo="Engineering Services"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
