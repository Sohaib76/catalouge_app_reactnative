import React from 'react';
import {View, Text, Image} from 'react-native';
import {green, grey} from '../../Components/PrimaryColors';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';

export default function EServiceDesc({navigation, route}) {
  const {text, img, desc} = route.params;
  return (
    <>
      <View style={{height: 2, backgroundColor: 'red', width: '100%'}} />

      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Action
          icon="keyboard-backspace"
          color="#005D40"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          titleStyle={{
            // fontFamily: 'AgfaRotisSansSerifExtraBold',
            fontWeight: 'bold',
          }}
          style={{marginLeft: 0}}
          color="#4e4e4f"
          title={text}
        />
        <Appbar.Action icon="magnify" color="#4e4e4f" />
      </Appbar.Header>
      <ScrollView style={{backgroundColor: 'white'}}>
        <Image
          source={{uri: img}}
          style={{
            width: '100%',
            height: 250, //height: '60%',
            flex: 0,
            // margin: 10, //16
          }}
        />

        <View style={{margin: 15, flex: 2}}>
          <Text
            style={{
              color: '#120766',
              fontSize: 20,
              margin: 10,
              marginBottom: 0,
              fontWeight: 'bold',
              // fontFamily: 'AgfaRotisSansSerifExtraBold',
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
                width: '88%',
                height: 1,
                margin: 10,
                marginLeft: -1,
                elevation: 1,
              }}
            />
          </View>

          <Text
            style={{
              color: grey,
              fontSize: 18, //20
              margin: 10,
              // fontFamily: 'AgfaRotisSansSerifExtraBold',

              //fontFamily: 'Rotis-SansSerif-Std_38713',
              lineHeight: 25,
              marginBottom: 20,
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
                width: '88%',
                height: 1,
                margin: 10,
                marginLeft: -1,
                elevation: 1,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
