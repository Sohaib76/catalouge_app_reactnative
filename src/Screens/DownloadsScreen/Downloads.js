import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import AppbarHeader from '../../Components/AppbarHeader';
import {IconButton, Divider} from 'react-native-paper';
import {green} from '../../Components/PrimaryColors';
import RNFetchBlob from 'rn-fetch-blob';

export default function Downloads({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();
  //https://www.gdirect.link/
  const theDownloadsLst = [
    {
      text: 'Document 1',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
    {
      text: 'Document 2',
      url:
        'https://drive.google.com/uc?export=download&id=18IKFvBmHlqhGaRYBOJzNd_kbBdCWZtxf',
    },
    {
      text: 'Document 3',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
    {
      text: 'Document 4',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
    {
      text: 'Document 5',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
    {
      text: 'Document 1',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
    {
      text: 'Document 2',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
    {
      text: 'Document 3',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
    {
      text: 'Document 4',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
    {
      text: 'Document 5',
      url:
        'https://drive.google.com/uc?export=download&id=1InX7Lpl6zZuwyXKQ3VunzdVxxmkDEvJn',
    },
  ];

  const [downloadsList, setDownloadsList] = useState(theDownloadsLst);

  const downloadFunc = (url) => {
    //   let dirs = RNFetchBlob.fs.dirs;

    //   RNFetchBlob.config({
    //     // add this option that makes response data to be stored as a file,
    //     // this is much more performant.
    //     // fileCache: true,
    //     path: dirs.DocumentDir + '/path-to-file.anything',
    //   })
    //     .fetch('GET', 'https://www.docdroid.net/fWmaFju/app-updated-pdf', {
    //       //some headers ..
    //     })
    //     .then((res) => {
    //       // the temp file path
    //       console.log('The file saved to ', res.path());
    //     });
    //   console.log('Downloaded');
    Linking.openURL(url);

    console.log('Downloaded');
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 20,
                  color: '#4e4e4f',
                  fontFamily: 'AgfaRotisSansSerifExtraBold',
                  // fontFamily: 'Rotis-SansSerif-Std_38713',
                  padding: 20,
                }}>
                {doc.text}
              </Text>
              <IconButton
                style={{flex: 0}}
                icon="download"
                color={green}
                size={25}
                onPress={() => downloadFunc(doc.url)}
              />
            </View>
            <Divider style={{backgroundColor: 'black', elevation: 3}} />
          </View>
        ))}
      </ScrollView>
    </>
  );
}
