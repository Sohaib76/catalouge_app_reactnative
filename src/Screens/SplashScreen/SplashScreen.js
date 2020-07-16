import React from 'react';
import {View, Alert, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Splash({navigation: {navigate}}) {
  return (
    <View style={styles.splash__container}>
      <ImageBackground
        style={styles.splash__img}
        source={require('../../Images/Splash.png')}>
        <TouchableOpacity
          style={styles.splash__btn}
          onPress={() => navigate('DrawerApp')}
        />
      </ImageBackground>
    </View>
  );
}
