import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import AppbarHeader from '../../Components/AppbarHeader';
import {IconButton, Divider} from 'react-native-paper';
import {green} from '../../Components/PrimaryColors';

export default function Downloads({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  const theDownloadsLst = [
    {text: 'Document 1', url: ''},
    {text: 'Document 2', url: ''},
    {text: 'Document 3', url: ''},
    {text: 'Document 4', url: ''},
    {text: 'Document 5', url: ''},
    {text: 'Document 1', url: ''},
    {text: 'Document 2', url: ''},
    {text: 'Document 3', url: ''},
    {text: 'Document 4', url: ''},
    {text: 'Document 5', url: ''},
  ];

  const [downloadsList, setDownloadsList] = useState(theDownloadsLst);

  const downloadFunc = () => {
    console.log('Pressed');
  };

  console.log('Downloads Rendered');

  return (
    <>
      <AppbarHeader
        _navMenu={_navMenu}
        iconName="download"
        heading="Download"
      />
      <ScrollView>
        {downloadsList.map((doc, id) => (
          <View key={id}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 20,
                  color: '#4e4e4f',
                  fontFamily: 'Rotis-SansSerif-Std_38713',
                  padding: 20,
                }}>
                {doc.text}
              </Text>
              <IconButton
                style={{flex: 0}}
                icon="download"
                color={green}
                size={25}
                onPress={downloadFunc}
              />
            </View>
            <Divider style={{backgroundColor: 'black'}} />
          </View>
        ))}
      </ScrollView>
    </>
  );
}
