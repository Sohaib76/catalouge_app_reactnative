import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import AppbarHeader from '../../Components/AppbarHeader';
import {IconButton, Colors, Divider} from 'react-native-paper';

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
                  fontFamily: 'ROTIS-SANS-SERIF',
                  padding: 20,
                }}>
                {doc.text}
              </Text>
              <IconButton
                style={{flex: 0}}
                icon="download"
                color="#005D40"
                size={25}
                onPress={downloadFunc}
              />
            </View>
            <Divider />
          </View>
        ))}
      </ScrollView>
    </>
  );
}
