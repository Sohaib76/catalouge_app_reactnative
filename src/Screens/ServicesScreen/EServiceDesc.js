import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {green, grey} from '../../Components/PrimaryColors';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import FAButton from '../../Components/FAButton.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';


export default function EServiceDesc({navigation, route}) {
  const {text, img, desc} = route.params;


  const chat = () => {
    Linking.openURL(
      'https://api.whatsapp.com/send?phone=971523171864&text=Hi,%20I%20want%20to%20know%20more%20about%20Hira%20Walraven%20products.',
    );
  };
  return (
    <>
      <View style={{height: 2, backgroundColor: 'red', width: '100%'}} />

      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Action
          icon={() => (
            <Image source={require('../../HDIcons/back.png')} />
          )}
          color="#005D40"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          titleStyle={{
          
            fontWeight: 'bold',
          }}
          style={{marginLeft: 0}}
          color="#4e4e4f"
          title={text}
        />
        <Appbar.Action icon="magnify" color="#4e4e4f" />
      </Appbar.Header>
      <ScrollView style={{backgroundColor: 'white'}}>
        <Image
          source={{uri: img}}
          style={{
            width: '100%',
            height: 250, //height: '60%',
            flex: 0,
    
          }}
        />

        <View style={{margin: 15, flex: 2}}>
          <Text
            style={{
              color: '#120766',
              fontSize: 20,
              margin: 10,
              marginBottom: 0,
              fontWeight: 'bold',
         
            }}>
            {text}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: green,
                width: '10%',
                height: 5,
                marginLeft: 10,
              }}
            />
            <View
              style={{
                backgroundColor: 'grey',
                width: '88%',
                height: 1,
                margin: 10,
                marginLeft: -1,
                elevation: 1,
              }}
            />
          </View>

          <Text
            style={{
              color: grey,
              fontSize: 18, //20
              margin: 10,
            
              lineHeight: 25,
              marginBottom: 20,
            }}>
            {desc}
          </Text>



          <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005D40',
        borderRadius: 50,
        flex: 1,
        width: '50%',
        marginLeft:100
      }}
      onPress={chat}>
      <Text
        style={{color: '#fff', fontSize: 10, marginLeft: 10, marginRight: -8}}>
        LET'S CHAT
      </Text>
      <IconButton
        icon="whatsapp"
        color="white"
        size={25}
      />
    </TouchableOpacity>




          {/* <FAButton fabBtnPress={chat} text="LET'S CHAT" icon="whatsapp" /> */}

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
                width: '88%',
                height: 1,
                margin: 10,
                marginLeft: -1,
                elevation: 1,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
