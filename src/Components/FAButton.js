import React from 'react';
import {Text} from 'react-native';
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
        borderRadius: 20,
        flex: 1,
        width: '65%',
      }}
      onPress={fabBtnPress}>
      <Text style={{color: '#fff', fontSize: 10, marginLeft: 10}}>{text}</Text>
      <IconButton
        icon={icon}
        color="white"
        size={15}
        onPress={() => console.log('Pressed')}
      />
    </TouchableOpacity>
  );
}
