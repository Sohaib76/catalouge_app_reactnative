import React from 'react';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import EServiceList from '../../Components/EServiceList';

export default function EngineeringServices({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  const theDummyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting";

  const theImageLink = require('../../Images/Others/eservice.png');

  const theServicesList = [
    {
      text: 'Engineering Service 1',
      desc: theDummyText,
      image: theImageLink,
    },
    {
      text: 'Engineering Service 2',
      desc: theDummyText,
      image: theImageLink,
    },
    {
      text: 'Engineering Service 3',
      desc: theDummyText,
      image: theImageLink,
    },
    {
      text: 'Engineering Service 4',
      desc: theDummyText,
      image: theImageLink,
    },
    {
      text: 'Engineering Service 5',
      desc: theDummyText,
      image: theImageLink,
    },
    {
      text: 'Engineering Service 6',
      desc: theDummyText,
      image: theImageLink,
    },
    {
      text: 'Engineering Service 7',
      desc: theDummyText,
      image: theImageLink,
    },
    {
      text: 'Engineering Service 8',
      desc: theDummyText,
      image: theImageLink,
    },
  ];

  return (
    <ScrollView>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Action icon="menu" color="#005D40" onPress={_navMenu} />
        <Appbar.Action
          style={{marginRight: 0}}
          icon={() => (
            <Image source={require('../../Images/Others/eicon.png')} />
          )}
          color="#005D40"
        />
        <Appbar.Content
          style={{marginLeft: -10}}
          color="#005D40"
          title="Engineering Services"
        />
        <Appbar.Action icon="magnify" color="#005D40" onPress={_navMenu} />
      </Appbar.Header>
      {theServicesList.map((service, id) => (
        <EServiceList
          navigation={navigation}
          key={id}
          text={service.text}
          img={service.image}
          desc={service.desc}
        />
      ))}
    </ScrollView>
  );
}
