import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import DrawerNavigation from './NavigationController';
import PdfViewTest from './src/Components/PdfViewTest';
import {setCustomText} from 'react-native-global-props';

export default class App extends Component {
  render() {
    const customTextProps = {
      style: {
        fontFamily: 'SegoeUI',
      },
    };

    setCustomText(customTextProps);

    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {/* <StatusBar backgroundColor="#005D40" barStyle="dark-content" /> */}
        {/* <PdfViewTest /> */}
        <DrawerNavigation />
      </>
    );
  }
}
