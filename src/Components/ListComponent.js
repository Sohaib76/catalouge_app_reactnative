import React from 'react';
import {Text, Image} from 'react-native';

export default function ListComponent({name, img}) {
  return (
    <>
      {console.log(img)}
      <Image
        source={{uri: img}}
        style={{
          width: 100,
          height: 100,
          flex: 0,
          marginRight: 20,
          resizeMode:'contain'
        }}
      />
      <Text
        style={{
          flex: 1,
          fontSize: 15,
          color: '#4e4e4f',
          marginRight: 10,
        }}>
        {name}
      </Text>
    </>
  );
}
