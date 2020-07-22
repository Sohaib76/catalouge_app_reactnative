import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import DrawerNavigation from './NavigationController';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {/* <StatusBar backgroundColor="#005D40" barStyle="dark-content" /> */}
        <DrawerNavigation />
      </>
    );
  }
}
