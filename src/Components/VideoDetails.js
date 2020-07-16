import React from 'react';
import {View, Text} from 'react-native';
import {Thumbnail} from 'react-native-thumbnail-video';

export default function VideoDetails({name, url, tag, ago, views}) {
  return (
    <View style={{display: 'flex', flexDirection: 'row', padding: 20}}>
      <View style={{flex: 4}}>
        <Thumbnail
          imageHeight={100}
          url={url}
          imageWidth="100%"
          showPlayIcon={false}
        />
      </View>
      <View
        style={{
          flex: 4,
          display: 'flex',
          marginLeft: 10,
          paddingRight: 20,
        }}>
        <Text style={{fontSize: 16}}>{name}</Text>
        <Text style={{color: '#515150'}}>{tag}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#515150'}}>{views} views</Text>
          <Text style={{color: '#515150'}}>{ago} years ago</Text>
        </View>
      </View>
    </View>
  );
}
