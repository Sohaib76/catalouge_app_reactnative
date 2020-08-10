import React from 'react';
import {Appbar} from 'react-native-paper';
import {grey} from './PrimaryColors';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {green} from './PrimaryColors';

export default function AppbarHeader({
  _navMenu,
  iconName,
  heading,
  _searchBar,
}) {
  return (
    <View>
      <View style={{height: 2, backgroundColor: 'red', width: '100%'}} />
      <Appbar.Header style={{backgroundColor: 'white', paddingLeft: 10}}>
        {/* <Appbar.Action icon="menu" color="#005D40" onPress={_navMenu} /> */}
        <Icon
          name="menu"
          type="entypo"
          color={green}
          size={40}
          onPress={_navMenu}
        />
        <Appbar.Action
          style={{marginRight: 0}}
          icon={iconName}
          color="#005D40"
          size={30}
        />
        <Appbar.Content
          style={{marginLeft: -10}}
          color={grey}
          title={heading}
          titleStyle={{
            fontFamily: 'AgfaRotisSansSerifExtraBold',
            fontWeight: 'bold',
          }}
        />
        <Appbar.Action
          icon="magnify"
          color="#005D40"
          onPress={_searchBar}
          size={30}
        />
      </Appbar.Header>
    </View>
  );
}
