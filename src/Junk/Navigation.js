import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import Splash from './src/Screens/SplashScreen/SplashScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Products from './src/Screens/ProductsScreen/Products';
import Downloads from './src/Screens/DownloadsScreen/Downloads';
import Contact from './src/Screens/ContactScreen/Contact';
import Favourites from './src/Screens/FavouritesScreen/Favourites';
import EngineeringServices from './src/Screens/ServicesScreen/EngineeringServices';
import More from './src/Screens/MoreScreen/More';
import VideosScreen from './src/Screens/VideosScreen/Videos.js';
import ProductsListItems from './src/Components/ProductsListItems';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// function DownloadsStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Downloads" component={Downloads} />
//     </Stack.Navigator>
//   );
// }

function DrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MyStack" backBehavior="initialRoute">
        <Drawer.Screen name="MyStack" component={MyStack} />

        {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Downloads" component={Downloads} />
        <Drawer.Screen name="Videos" component={VideosScreen} />
        <Drawer.Screen name="Contact Us" component={Contact} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen
          name="Engineering Services"
          component={EngineeringServices}
        />
        <Drawer.Screen name="More Information" component={More} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function MyStack() {
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
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
      mode="card">
      {/* <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        /> */}
      {/* <Stack.Screen
          options={{headerShown: false, headerLeft: null}}
          name="DrawerApp"
          component={DrawerApp}
        /> */}

      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ProductsStack"
        component={Products}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProductsListItems"
        component={ProductsListItems}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Downloads"
        component={Downloads}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="VideosStack"
        component={VideosScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Contact Us"
        component={Contact}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Favourites"
        component={Favourites}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Engineering Services"
        component={EngineeringServices}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="More Information"
        component={More}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default DrawerApp;
