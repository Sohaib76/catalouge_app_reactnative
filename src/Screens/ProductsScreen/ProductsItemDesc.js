import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Appbar} from 'react-native-paper';

import BulletPoints from '../../Components/BulletPoints.js';
import {ScrollView} from 'react-native-gesture-handler';
import FAButton from '../../Components/FAButton.js';
import DataModel from './DataModel.js';

export default function ProductsItemDesc({route, navigation}) {
  const thedataObject = {
    one: 'DM C2 5 018',
    two: '15 - 19',
    three: '1/8',
    four: '15',
    five: 'M8',
    six: '60',
    seven: '36',
    eight: '26',

    nine: '19 x 1.2',
    ten: '850',
    eleven: '450',
  };
  const theDataCel = [
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
    thedataObject,
  ];

  const thedataHeader = [
    'Part No.',
    'D (mm)',
    'D (")',
    'Dia (mm)',
    'G',
    'B (mm)',
    'H (mm)',
    'h (mm)',
    'b x s (mm)',
    'Fa,z (N)',
    'Pack 1',
  ];

  const item = route.params.item;
  const parentName = route.params.name;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setImages(item.images);
  }, []);

  const viewChart = () => {
    console.log('Chart');
    setModalVisible(true);
  };

  const chat = () => {
    console.log('Chat');
  };
  const download = () => {
    console.log('Download');
  };

  const [images, setImages] = useState([]);

  return (
    <>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Action
          icon="keyboard-backspace"
          color="#005D40"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          style={{marginLeft: 0}}
          color="#4e4e4f"
          title={item.name}
        />
        <Appbar.Action icon="magnify" color="#4e4e4f" />
      </Appbar.Header>

      <DataModel
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        theDataCel={theDataCel}
        thedataHeader={thedataHeader}
      />

      <ScrollView style={{marginBottom: 20}}>
        <SliderBox images={images} dotColor="red" inactiveDotColor="grey" />

        <Text
          style={{
            color: '#005D40',
            fontSize: 20,
            fontWeight: 'bold',
            margin: 10,
          }}>
          {item.name}
        </Text>
        <View
          style={{
            backgroundColor: 'grey',
            width: '100%',
            height: 2,
            margin: 10,
          }}
        />
        <View
          style={{
            backgroundColor: '#005D40',
            width: '15%',
            height: 5,
            margin: 10,
          }}
        />
        <Text
          style={{
            color: '#005D40',
            fontSize: 16,
            fontWeight: 'bold',
            margin: 10,
          }}>
          Features and Benefits
        </Text>

        {item.features.map((bullet_point, id) => (
          <BulletPoints key={id} text={bullet_point} />
        ))}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            padding: 4,
            marginLeft: 30,
            marginRight: 20,
          }}>
          <FAButton
            fabBtnPress={viewChart}
            text="VIEW CHART"
            icon="arrow-right-drop-circle"
          />
          <FAButton fabBtnPress={download} text="DOWNLOAD" icon="download" />
          <FAButton fabBtnPress={chat} text="LETS CHAT" icon="whatsapp" />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'red',
              width: '10%',
              height: 5,
              marginLeft: 10,
            }}
          />
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 2,
              margin: 10,
              marginLeft: -1,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#120766',
            }}>
            Category:
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#515150',
              marginLeft: 5,
            }}>
            {parentName}
          </Text>
        </View>

        {item.category.map((cat, id) => (
          <Text
            key={id}
            style={{
              fontStyle: 'italic',
              fontSize: 14,
              color: '#515150',
              marginLeft: 10,
              marginRight: 10,
              fontFamily: 'Rotis-SansSerif-Std_38713',
            }}>
            {cat}
          </Text>
        ))}
      </ScrollView>
    </>
  );
}