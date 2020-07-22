import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Appbar} from 'react-native-paper';
import HomeCard from '../../Components/HomeCard';
import Splash from '../SplashScreen/SplashScreen';

export default function HomeScreen({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsVisible(false);
    }, 5000);
  }, []);

  return (
    <View style={{flex: 1}}>
      {isVisible ? <Splash /> : null}
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
              navigation={navigation}
              navigateTo="Products"
              fav={false}
            />
            <HomeCard
              img={require('../../Images/homeImages/location.png')}
              text="LOCATIONS"
              navigation={navigation}
              navigateTo="Locations"
              fav={false}
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
              navigation={navigation}
              navigateTo="Favourites"
              fav={true}
              //Favourites
            />
            <HomeCard
              img={require('../../Images/homeImages/download.png')}
              text="DOWNLOAD"
              navigation={navigation}
              navigateTo="Downloads"
              fav={false}
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
              navigation={navigation}
              navigateTo="Contact Us"
              fav={false}
            />
            <HomeCard
              img={require('../../Images/homeImages/pair-of-gears.png')}
              text="ENGINEERING SERVICES"
              navigation={navigation}
              navigateTo="Engineering Services"
              fav={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
