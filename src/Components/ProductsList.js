import React, {useEffect} from 'react';
import {Divider, TouchableRipple} from 'react-native-paper';
import ListComponent from './ListComponent';

export default function ProductsList({name, img, items, navigation, click}) {
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);

  return (
    <>
      <TouchableRipple
        onPress={() =>
          click
            ? navigation.navigate('ProductsListItems', {items, name}) //, navigation
            : console.log('Pressed')
        }
        rippleColor="rgba(0, 0, 0, .92)"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <ListComponent name={name} img={img} />
      </TouchableRipple>
      <Divider style={{elevation: 3}} />
    </>
  );
}
