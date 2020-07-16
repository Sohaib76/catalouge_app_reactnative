import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Appbar} from 'react-native-paper';

import BulletPoints from '../../Components/BulletPoints.js';
import {ScrollView} from 'react-native-gesture-handler';
import FAButton from '../../Components/FAButton.js';

export default function ProductsItemDesc({route, navigation}) {
  const item = route.params.item;
  const parentName = route.params.name;

  useEffect(() => {
    setImages(item.images);
  }, []);

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
          <FAButton text="VIEW CHART" icon="arrow-right-drop-circle" />
          <FAButton text="DOWNLOAD" icon="download" />
          <FAButton text="LETS CHAT" icon="whatsapp" />
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
            // justifyContent: 'space-evenly',
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
              fontSize: 14,
              color: '#515150',
              marginLeft: 10,
              marginRight: 10,
            }}>
            {cat}
          </Text>
        ))}
      </ScrollView>
    </>
  );
}
