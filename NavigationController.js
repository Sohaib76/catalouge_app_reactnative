import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import Splash from './src/Screens/SplashScreen/SplashScreen';
import Products from './src/Screens/ProductsScreen/Products';
import Downloads from './src/Screens/DownloadsScreen/Downloads';
import Contact from './src/Screens/ContactScreen/Contact';
import Favourites from './src/Screens/FavouritesScreen/Favourites';
import EngineeringServices from './src/Screens/ServicesScreen/EngineeringServices';
import More from './src/Screens/MoreScreen/More';
import VideosScreen from './src/Screens/VideosScreen/Videos.js';
import ProductsListItems from './src/Components/ProductsListItems';
import ProductsItemDesc from './src/Screens/ProductsScreen/ProductsItemDesc';
import Locations from './src/Screens/LocationsScreen/Locations';
import EServiceDesc from './src/Screens/ServicesScreen/EServiceDesc';

import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import CustomDrawerContent from './src/Components/CustomDrawerContent';

const Stack = createStackNavigator();

const Drawwer = createDrawerNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function DownloadsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Downloads" component={Downloads} />
    </Stack.Navigator>
  );
}

function VideosStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Videos" component={VideosScreen} />
    </Stack.Navigator>
  );
}

function ProductsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config,
        },
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductsListItems" component={ProductsListItems} />
      <Stack.Screen name="ProductsItemDesc" component={ProductsItemDesc} />
    </Stack.Navigator>
  );
}

function ContactStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contact} />
    </Stack.Navigator>
  );
}

function FavouritesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
}

function EngineeringServicesStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="EngineeringServices"
        component={EngineeringServices}
      />
      <Stack.Screen name="EServiceDesc" component={EServiceDesc} />
    </Stack.Navigator>
  );
}

function MoreStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
}

function LocationsStackNavigator() {
  Locations;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Locations" component={Locations} />
    </Stack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawwer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
        backBehavior="initialRoute">
        <Drawwer.Screen name="Home" component={HomeScreen} />

        <Drawwer.Screen name="Products" component={ProductsStackNavigator} />
        <Drawwer.Screen name="Downloads" component={DownloadsStackNavigator} />
        <Drawwer.Screen name="Videos" component={VideosStackNavigator} />
        <Drawwer.Screen name="Contact Us" component={MoreStackNavigator} />
        <Drawwer.Screen
          name="Favourites"
          component={FavouritesStackNavigator}
        />
        <Drawwer.Screen
          name="Engineering Services"
          component={EngineeringServicesStackNavigator}
        />
        <Drawwer.Screen
          name="More Information"
          component={MoreStackNavigator}
        />
        <Drawwer.Screen name="Locations" component={LocationsStackNavigator} />
      </Drawwer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;