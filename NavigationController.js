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

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

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
    <Stack.Navigator>
      <Stack.Screen
        name="EngineeringServices"
        component={EngineeringServices}
      />
    </Stack.Navigator>
  );
}

function MoreStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
}

function LocationsStackNavigator() {
  Locations;
  return (
    <Stack.Navigator>
      <Stack.Screen name="Locations" component={Locations} />
    </Stack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home" backBehavior="initialRoute">
      <Drawer.Screen name="Home" component={HomeScreen} />

      <Drawer.Screen name="Products" component={ProductsStackNavigator} />
      <Drawer.Screen name="Downloads" component={DownloadsStackNavigator} />
      <Drawer.Screen name="Videos" component={VideosStackNavigator} />
      <Drawer.Screen name="Contact Us" component={ContactStackNavigator} />
      <Drawer.Screen name="Favourites" component={FavouritesStackNavigator} />
      <Drawer.Screen
        name="Engineering Services"
        component={EngineeringServicesStackNavigator}
      />
      <Drawer.Screen name="More Information" component={MoreStackNavigator} />
      <Drawer.Screen name="Locations" component={LocationsStackNavigator} />
    </Drawer.Navigator>
  );
}

function StartupStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            // transitionSpec: {
            //   open: config,
            //   close: config,
            // },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerApp"
          component={DrawerNavigation}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StartupStack;
