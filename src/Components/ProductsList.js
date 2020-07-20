import React from 'react';
import {Divider, TouchableRipple} from 'react-native-paper';
import ListComponent from './ListComponent';

export default function ProductsList({name, img, items, navigation}) {
  return (
    <>
      <TouchableRipple
        onPress={
          () => navigation.navigate('ProductsListItems', {items, name}) //, navigation
        }
        rippleColor="rgba(0, 0, 0, .92)"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <ListComponent name={name} img={img} />
      </TouchableRipple>
      <Divider />
    </>
  );
}
