import React, {useState, useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Appbar, IconButton} from 'react-native-paper';

import BulletPoints from '../../Components/BulletPoints.js';
import {ScrollView} from 'react-native-gesture-handler';
import FAButton from '../../Components/FAButton.js';
import DataModel from './DataModel.js';
import {green} from '../../Components/PrimaryColors';
import AsyncStorage from '@react-native-community/async-storage';


export default function ProductsItemDesc({route, navigation}) {
 
 

  const item = route.params.item;
  const parentName = route.params.name;
  const parentdesc = route.params.desc;


  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const theImggList = [];
    var descriptionList = [];
    var modifiedDescList = [];
    var parentDescList = [];
    var modParentDescList = [];
    item.product_images.map((imgg) => {
      theImggList.push(imgg.image);
    });
    descriptionList = item.description.split('</li>');

    descriptionList.pop();
    console.log(descriptionList);
    descriptionList.map((d) => {
      modifiedDescList.push(
        d
          .replace('<li>', '')
          .replace('<ul>', '')
          .replace('<br>', '')
          .replace('&nbsp;', ''),
      );
    });
    console.log(modifiedDescList);

    parentDescList = parentdesc.split('<p>');
   
    parentDescList.shift();
    parentDescList.map((ite) => {
      modParentDescList.push(
        ite
          .replace('</p>', '')
          .replace('&nbsp;', '')
          .replace('<br>', '')
          .replace('\n', ''),
      );
    });
    console.log(modParentDescList);
    setparentDesc(modParentDescList);
    setImages(theImggList);
    setDescr(modifiedDescList);
  }, []);

  const viewChart = () => {
    console.log('Chart');
    setModalVisible(true);
  };

  const chat = () => {
    Linking.openURL(
      'https://api.whatsapp.com/send?phone=971523171864&text=Hi,%20I%20want%20to%20know%20more%20about%20Hira%20Walraven%20products.',
    );
  };
  const download = () => {
    console.log('Download');
    Linking.openURL(item.brochure_file);
  };

  const [images, setImages] = useState([]);
  const [descr, setDescr] = useState();
  const [parentDesc, setparentDesc] = useState();

  const [starePress, setStartPress] = useState(false);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
        item.name,
        JSON.stringify(item), 
      );
      console.log('saved');
    } catch (e) {
      // saving error
      console.log('error', e);
    }
  };

  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem(item.name);

      console.log('deleted', item.name);
    } catch (e) {
      // saving error
      console.log('error', e);
    }
  };

  const setStarred = async (nameOfItem, trfl) => {
    try {
      await AsyncStorage.setItem(nameOfItem + 'stare', JSON.stringify(trfl));
      console.log('starred saved value is', trfl);
      if (trfl == true) {
        storeData();
        console.log('Data Stored');
      } else if (trfl == false) {
        deleteData();
        console.log('Data Removed');
      }
    } catch (e) {
      // saving error
      console.log('error', e);
    }
  };

  const onPressStarred = () => {
    console.log('Pressed');
    // storeData();

    setStartPress(!starePress);

    setStarred(item.name, !starePress);
  };

  useEffect(() => {
    const gotStarred = async (nameOfItem) => {
      try {
        const value = await AsyncStorage.getItem(nameOfItem + 'stare');
        if (value !== null) {
          console.log('GotVal', value);
          setStartPress(JSON.parse(value));
        }
        console.log('The value at render is ', value);
      } catch {
        console.log('error');
      }
    };
    gotStarred(item.name);
  }, []);

  return (
    <>
      <View style={{height: 2, backgroundColor: 'red', width: '100%'}} />

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
        chart={item.chart}
      />

      <ScrollView style={{marginBottom: 20}}>
        <View
          style={{
            backgroundColor: 'white',
            opacity: 0.9,
            flexDirection: 'row',
            paddingRight: 20,
            justifyContent: 'flex-end',
          }}>
          <IconButton
            style={{margin: 0}}
            icon={starePress ? 'star' : 'star-outline'}
            color={green}
            size={30}
            onPress={onPressStarred}
          />
        </View>
        <View style={{backgroundColor: 'white'}}>
          <SliderBox images={images} dotColor="red" inactiveDotColor="grey" />
        </View>

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

        {descr &&
          descr.map((bullet_point, id) => (
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

        <View style={{padding: 10}}>
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
          {parentDesc &&
            parentDesc.map((cat, id) => (
              <Text
                key={id}
                style={{
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: '#515150',
                  marginLeft: 10,
                  marginRight: 10,
                  fontFamily: 'SegoeUIItalic',
                }}>
                {cat}
              </Text>
            ))}

       
        </View>
      </ScrollView>
    </>
  );
}
