import React from 'react';
import {Text, Image} from 'react-native';

export default function ListComponent({name, img}) {
  return (
    <>
      {console.log(img)}
      <Image
        source={{uri: img}}
        style={{
          width: 80,
          height: 80,
          flex: 0,
          marginRight: 8,
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
