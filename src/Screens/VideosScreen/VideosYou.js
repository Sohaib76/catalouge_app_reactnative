import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import VideoDetails from '../../Components/VideoDetails';
import AppbarHeader from '../../Components/AppbarHeader';

const CHANNEL_ID = 'UCFChd_w024Jyn97hdjaB8kQ';
const API_KEY = 'AIzaSyA_Zym0Y8pogUylmaxgo7a_3NvUj7UVrqQ';

export default class VideosYou extends Component {
  componentDidMount() {
    this.fetchPlaylistData();
  }
  fetchPlaylistData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=30`,
    ).catch((error) => {
      console.log(error);
    });
    const json = await response.json();

    console.log('ID', json.items[0].id.videoId); //map

    json.items.map(async (item) => {
      await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${item.id.videoId}&key=${API_KEY}&part=snippet,id,statistics`,
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.items[0].snippet.title);

          agos = 2020 - data.items[0].snippet.publishedAt.substring(0, 4);

          this.setState({
            theVideoList: this.state.theVideosList.push({
              videoUrl: `https://www.youtube.com/watch?v=${data.items[0].id}`,
              name: data.items[0].snippet.title,
              tag: data.items[0].snippet.channelTitle,
              views: data.items[0].statistics.viewCount,
              ago: agos,
            }),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  // The Response

  constructor(props) {
    super(props);
    this.state = {
      theVideosList: [],
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <AppbarHeader iconName="play-circle" heading="Videos" />
        <ScrollView style={{paddingTop: 15}}>
          {this.state.theVideosList.map((video, id) => (
            <VideoDetails
              url={video.videoUrl}
              name={video.name}
              tag={video.tag}
              views={video.views}
              ago={video.ago}
              key={id}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
