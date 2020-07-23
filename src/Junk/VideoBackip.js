import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import VideoDetails from '../../Components/VideoDetails';
import AppbarHeader from '../../Components/AppbarHeader';

const CHANNEL_ID = 'UCFChd_w024Jyn97hdjaB8kQ';
const API_KEY = 'AIzaSyDwXJzJ-lO2cAOb9jrmFl717hjk-BSL5B8';
// const theVideoList = [];

export default class VideosBackup extends Component {
  // watchVideo(video_url) {
  //   Actions.watchvideo({video_url: video_url});
  // }
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
    // this.setState({videos: json['items']});

    console.log('ID', json.items[0].id.videoId); //map

    json.items.map(async (item) => {
      // console.log(await item);
      await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${item.id.videoId}&key=${API_KEY}&part=snippet,id,statistics`,
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.items[0].snippet.title);

          // //tag
          // console.log('Tag', data.items[0].snippet.channelTitle);

          // //views
          // console.log('Views', data.items[0].statistics.viewCount);

          // //ago
          // console.log('Ago', data.items[0].snippet.publishedAt.substring(0, 4)); //2020-ans
          agos = 2020 - data.items[0].snippet.publishedAt.substring(0, 4);

          this.setState({
            videoList: this.state.videoList.push({
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

      //name
      // console.log('Title', thejson.items[0].snippet.title);

      // //tag
      // console.log('Tag', thejson.items[0].snippet.channelTitle);

      // //views
      // console.log('Views', thejson.items[0].statistics.viewCount);

      // //ago
      // console.log(
      //   'Ago',
      //   thejson.items[0].statistics.publishedAt.substring(0, 4),
      // ); //2020-ans
    });
    // const vidResponse = await fetch(
    //   `https://www.googleapis.com/youtube/v3/videos?id=${video_id}&key=${API_KEY}&part=snippet,id,,statistics`,
    // );

    // //name
    // console.log('Title', json.items[0].snippet.title);

    // //tag
    // console.log('Tag', json.items[0].snippet.channelTitle);

    // //views
    // console.log('Views', json.items[0].statistics.viewCount);

    // //ago
    // console.log('Ago', json.items[0].statistics.publishedAt.substring(0, 4)); //2020-ans
  };

  // The Response

  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
    };
  }
  render() {
    // const videos = this.state.videos;
    return (
      <View>
        {console.log('Return', this.state.videoList)}
        {/* <FlatList
          data={this.state.videos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.demacate}
              onPress={() => this.watchVideo(item.contentDetails.videoId)}>
              <Text style={styles.item}>{item.snippet.title}</Text>
            </TouchableOpacity>
          )}
        /> */}
        <>
          <AppbarHeader iconName="play-circle" heading="Videos" />
          {/* <ScrollView style={{paddingTop: 15}}>
            {this.state.videoList.map((video, id) => (
              <VideoDetails
                url={video.videoUrl}
                name={video.name}
                tag={video.tag}
                views={video.views}
                ago={video.ago}
                key={id}
              />
            ))}
          </ScrollView> */}
        </>
      </View>
    );
  }
}

//For Channel
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDwXJzJ-lO2cAOb9jrmFl717hjk-BSL5B8&channelId=UCFChd_w024Jyn97hdjaB8kQ&part=snippet,id&order=date&maxResults=30

//For Video
//https://www.googleapis.com/youtube/v3/videos?id=X8jVc5kiBts&key=AIzaSyDwXJzJ-lO2cAOb9jrmFl717hjk-BSL5B8&part=snippet,id,statistics

//alerts.push({num : 3, app:'helloagain_again',message:'yet another message'});
