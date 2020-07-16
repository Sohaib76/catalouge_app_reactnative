import React from 'react';
import {Text, Image} from 'react-native';

export default function ListComponent({name, img}) {
  return (
    <>
      <Image
        source={img}
        style={{
          width: 100,
          height: 100,
          flex: 0,
        }}
      />
      <Text
        style={{
          flex: 1,
          fontSize: 15,
          color: '#4e4e4f',
          fontFamily: 'ROTIS-SANS-SERIF',
          fontWeight: 'bold',
          marginRight: 10,
        }}>
        {name}
      </Text>
    </>
  );
}
