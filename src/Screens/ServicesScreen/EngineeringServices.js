import React, {useEffect, useState} from 'react';
import {View, Image, Text, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import EServiceList from '../../Components/EServiceList';
import {grey, green} from '../../Components/PrimaryColors';
import {Icon} from 'react-native-elements';

export default function EngineeringServices({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  const theDummyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting";

  const theImageLink = require('../../Images/Others/eservice.png');

  // const theServicesList = [
  //   {
  //     text: 'Engineering Service 1',
  //     desc: theDummyText,
  //     image: theImageLink,
  //   },
  //   {
  //     text: 'Engineering Service 2',
  //     desc: theDummyText,
  //     image: theImageLink,
  //   },
  //   {
  //     text: 'Engineering Service 3',
  //     desc: theDummyText,
  //     image: theImageLink,
  //   },
  //   {
  //     text: 'Engineering Service 4',
  //     desc: theDummyText,
  //     image: theImageLink,
  //   },
  //   {
  //     text: 'Engineering Service 5',
  //     desc: theDummyText,
  //     image: theImageLink,
  //   },
  //   {
  //     text: 'Engineering Service 6',
  //     desc: theDummyText,
  //     image: theImageLink,
  //   },
  //   {
  //     text: 'Engineering Service 7',
  //     desc: theDummyText,
  //     image: theImageLink,
  //   },
  //   {
  //     text: 'Engineering Service 8',
  //     desc: theDummyText,
  //     image: theImageLink,
  //   },
  // ];

  useEffect(() => {
    fetch('https://roundcomm.com/demos/hirawalraven/api/engineering-service/')
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setEngineeringServiceList(res.data);
      });
  }, [engineeringServiceList]);

  const [engineeringServiceList, setEngineeringServiceList] = useState();

  return (
    <ScrollView>
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
          icon={() => (
            <Image source={require('../../Images/Others/eicon.png')} />
          )}
          color={green}
        />
        <Appbar.Content
          style={{marginLeft: -10}}
          color={grey}
          title="Engineering Services"
          titleStyle={{
            fontFamily: 'AgfaRotisSansSerifExtraBold',
            fontWeight: 'bold',
          }}
        />
        <Appbar.Action
          icon="magnify"
          color="#005D40"
          onPress={_navMenu}
          size={30}
        />
      </Appbar.Header>
      {engineeringServiceList ? (
        engineeringServiceList.map((service, id) => (
          <EServiceList
            navigation={navigation}
            key={id}
            text={service.title}
            img={service.image}
            desc={service.description
              .replace('<p>', '')
              .replace('</p>', '')
              .replace('<br>', '')}
          />
        ))
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={green} />
        </View>
      )}
    </ScrollView>
  );
}
