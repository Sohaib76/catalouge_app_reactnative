import React from 'react';
import {Appbar} from 'react-native-paper';

export default function AppbarHeader({_navMenu, iconName, heading}) {
  return (
    <Appbar.Header style={{backgroundColor: 'white'}}>
      <Appbar.Action icon="menu" color="#005D40" onPress={_navMenu} />
      <Appbar.Action style={{marginRight: 0}} icon={iconName} color="#005D40" />
      <Appbar.Content style={{marginLeft: 0}} color="#005D40" title={heading} />
      <Appbar.Action icon="magnify" color="#005D40" onPress={_navMenu} />
    </Appbar.Header>
  );
}
