import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableRipple, Divider, Appbar} from 'react-native-paper';
import {grey} from './PrimaryColors';

export default function EServiceList({text, img, desc, navigation}) {
  return (
    <>
      <TouchableRipple
        onPress={
          () => navigation.navigate('EServiceDesc', {text, img, desc}) //, navigation
        }
        rippleColor="rgba(0, 0, 0, .82)"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <>
          <Image
            source={{uri: img}}
            style={{
              width: 70,
              height: 70,
              flex: 0,
              margin: 10, //16
            }}
          />
          <Text
            style={{
              flex: 1,
              fontSize: 19,
              color: grey,
              // fontFamily: 'SegoeUI',
              // fontFamily: 'AgfaRotisSansSerifExtraBold',
              //Rotis-SansSerif-Std_38713
              //'Rotis Sans Serif 55'
              //AgfaRotisSansSerifExtraBold
              marginRight: 10,
            }}>
            {text}
          </Text>
        </>
      </TouchableRipple>
      <Divider style={{backgroundColor: 'black', elevation: 3}} />
    </>
  );
}
