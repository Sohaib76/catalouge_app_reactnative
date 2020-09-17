import React from 'react';
import {View, Alert, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Splash() {
  return (
    <View style={styles.splash__container}>
      <ImageBackground
        style={styles.splash__img}
        source={require('../../HDIcons/splash.png')}>
        <TouchableOpacity
          style={styles.splash__btn}
      
        />
      </ImageBackground>
    </View>
  );
}
