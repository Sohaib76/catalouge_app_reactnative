import React, {useEffect} from 'react';
import {Divider, TouchableRipple} from 'react-native-paper';
import ListComponent from './ListComponent';


export default function ProductsList({name, img, items, navigation, desc}) {
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);

  return (
    <>
      <TouchableRipple
        onPress={
          () => navigation.navigate('ProductsListItems', {items, name, desc}) //, navigation
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
