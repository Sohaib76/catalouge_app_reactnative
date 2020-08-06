import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import {green} from './PrimaryColors';

export default function HomeCard({
  navigation,
  img,
  text,
  txtColor,
  bgColor,
  navigateTo,
}) {
  const [bg, setbg] = useState(bgColor);
  const [textColor, settextColor] = useState(txtColor);

  navigator = () => {
    setbg(green);
    settextColor('white');
    navigation.navigate(navigateTo);
  };

  return (
    // <View
    //   style={{
    //     backgroundColor: bgColor,
    //     flex: 1,
    //     margin: 10,
    //     borderRadius: 15,
    //     borderColor: '#005D40',
    //     borderWidth: 4,
    //     alignItems: 'center',
    //     justifyContent: 'center',

    //   }}>
    <TouchableRipple
      style={{
        backgroundColor: bgColor,
        flex: 1,
        margin: 10,
        borderRadius: 15,
        borderColor: '#005D40',
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      // activeOpacity={1}
      // rippleColor="rgba(0, 50, 0, 1)"
      // underlayColor="white"
      onPress={navigator}>
      <View
        style={{
          // backgroundColor: bgColor,
          // flex: 1,
          // margin: 10,
          // borderRadius: 15,
          // borderColor: '#005D40',
          // borderWidth: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
      </View>
    </TouchableRipple>
  );
}
