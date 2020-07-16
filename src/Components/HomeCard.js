import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function HomeCard({
  navigation,
  img,
  text,
  txtColor,
  bgColor,
  navigateTo,
}) {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        flex: 1,
        margin: 10,
        borderRadius: 15,
        borderColor: '#005D40',
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate(navigateTo)}>
        <View style={{flex: 5, justifyContent: 'center'}}>
          <Image source={img} />
        </View>
        <Text
          style={{
            fontSize: 15,
            flex: 0,
            fontWeight: 'bold',
            color: txtColor,
            marginBottom: 15,
            textAlign: 'center',
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
