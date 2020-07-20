import React from 'react';
import {View, Text, Image} from 'react-native';
import {green, grey} from '../../Components/PrimaryColors';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';

export default function EServiceDesc({navigation, route}) {
  const {text, img, desc} = route.params;
  return (
    <>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Action
          icon="keyboard-backspace"
          color="#005D40"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content style={{marginLeft: 0}} color="#4e4e4f" title={text} />
        <Appbar.Action icon="magnify" color="#4e4e4f" />
      </Appbar.Header>
      <ScrollView>
        <Image source={img} />
        <Text
          style={{
            color: green,
            fontSize: 20,
            margin: 10,
            // fontFamily: 'Rotis-SansSerif-Std_38713',
          }}>
          {text}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: green,
              width: '10%',
              height: 5,
              marginLeft: 10,
            }}
          />
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 2,
              margin: 10,
              marginLeft: -1,
            }}
          />
        </View>

        <Text
          style={{
            color: grey,
            fontSize: 18,
            margin: 10,
            fontFamily: 'Rotis Sans Serif 55',
          }}>
          {desc}
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'red',
              width: '10%',
              height: 5,
              marginLeft: 10,
            }}
          />
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 2,
              margin: 10,
              marginLeft: -1,
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}
