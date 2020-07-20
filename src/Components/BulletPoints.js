import React from 'react';
import {View, Text} from 'react-native';

export default function BulletPoints({text}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15,
      }}>
      <Text style={styles.products__desc__dots}>{'\u2022' + ' '}</Text>
      <Text style={styles.products__desc__points}>{text}</Text>
    </View>
  );
}

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  products__desc__points: {
    fontSize: 16.5,

    color: '#515150',
  },
  products__desc__dots: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#515150',
  },
});
