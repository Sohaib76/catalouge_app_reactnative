import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {Appbar} from 'react-native-paper';
import HomeCard from '../../Components/HomeCard';
import Splash from '../SplashScreen/SplashScreen';
import {Icon} from 'react-native-elements';
import {green} from '../../Components/PrimaryColors';

export default function HomeScreen({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();
  const _searchBar = () => {
    navigation.navigate('Products');
  };

  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   setTimeout(function () {
  //     setIsVisible(false);
  //   }, 5000);
  // }, []);

  return (
    <View style={{flex: 1}}>
      {/* {isVisible ? <Splash /> : null} */}
      <View style={{height: 2, backgroundColor: 'red', width: '100%'}} />
      <Appbar.Header
        style={{
          backgroundColor: '#005D40',
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: 10,
        }}>
     
        <Icon
          name="menu"
          type="entypo"
          color="#fff"
          size={40}
          onPress={_navMenu}
        />
        <View>
          <Image
            source={require('../../Images/Icons/diamondwalraven/drawable-xxhdpi/Logo.png')}
            style={{
              width: 80,
              height: 30,
              resizeMode: 'stretch',
            }}
          />
        </View>

        <Appbar.Action
          icon="magnify"
          color="#fff"
          onPress={_searchBar}
          size={30}
        />
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
              img={require('../../HDIcons/logo.png')}
              text="PRODUCTS"
              navigation={navigation}
              navigateTo="Products"
              fav={false}
              bgColor={green}
              txtColor="white"
            />
             <HomeCard
              img={require('../../HDIcons/pair-of-gears.png')}
              text="ENGINEERING SERVICES"
              navigation={navigation}
              navigateTo="Engineering Services"
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
              img={require('../../HDIcons/star.png')}
              text="FAVOURITES LIST"
              navigation={navigation}
              navigateTo="Favourites"
              fav={true}
              //Favourites
            />
            <HomeCard
              img={require('../../HDIcons/download.png')}
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
              img={require('../../HDIcons/location.png')}
              text="LOCATIONS"
              navigation={navigation}
              navigateTo="Locations"
              fav={false}
            />
            <HomeCard
              img={require('../../HDIcons/contact.png')}
              text="CONTACT US"
              navigation={navigation}
              navigateTo="Contact Us"
              fav={false}
            />
           
          </View>
        </View>
      </View>
    </View>
  );
}
