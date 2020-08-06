import React from 'react';
import {Text, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';

export default function FAButton({icon, text, fabBtnPress}) {
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005D40',
        borderRadius: 50,
        flex: 1,
        width: '65%',
      }}
      onPress={fabBtnPress}>
      <Text
        style={{color: '#fff', fontSize: 10, marginLeft: 10, marginRight: -8}}>
        {text}
      </Text>
      <IconButton
        icon={icon}
        color="white"
        size={25}
        // onPress={Linking.openURL(
        //   'https://api.whatsapp.com/send?phone=971523171864&text=Hi,%20I%20want%20to%20know%20more%20about%20Hira%20Walraven%20products.',
        // )}
      />
    </TouchableOpacity>
  );
}
