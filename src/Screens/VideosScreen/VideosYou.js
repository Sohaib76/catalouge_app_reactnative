import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import VideoDetails from '../../Components/VideoDetails';
import AppbarHeader from '../../Components/AppbarHeader';

const CHANNEL_ID = 'UCqH-4meI8X2giZMHO-Y1idQ';
// const API_KEY = 'AIzaSyA_Zym0Y8pogUylmaxgo7a_3NvUj7UVrqQ'; //my old
// const API_KEY = 'AIzaSyBnAhJjSM7u3AXbYmH6xQL7UcOLpqpTYzw'; //client
const API_KEY = 'AIzaSyAIyyiYQnlv3jBKyd7euILhg7lOSCH2T60'; //client new

var tempVideosList = [];
export default class VideosYou extends Component {
  componentDidMount() {
    this.fetchPlaylistData();
    console.disableYellowBox = true;
  }
  fetchPlaylistData = async () => {
    console.log('Fetching');
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=30`,
    ).catch((error) => {
      console.log(error);
    });
    try {
      const json = await response.json();

      console.log('ID', json.items[0].id.videoId); //map

      json.items.map(async (item) => {
        console.log(item.id.videoId);
        await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${item.id.videoId}&key=${API_KEY}&part=snippet,id,statistics`,
        )
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);

            if (data.items.length > 0) {
              var agos =
                2020 - data.items[0].snippet.publishedAt.substring(0, 4);
              tempVideosList = {
                videoUrl: `https://www.youtube.com/watch?v=${data.items[0].id}`,
                name: data.items[0].snippet.title,
                tag: data.items[0].snippet.channelTitle,
                views: data.items[0].statistics.viewCount,
                ago: agos,
              };

              console.log(tempVideosList);
              this.setState({
                theVideosList: [
                  ...this.state.theVideosList,
                  {
                    videoUrl: `https://www.youtube.com/watch?v=${data.items[0].id}`,
                    name: data.items[0].snippet.title,
                    tag: data.items[0].snippet.channelTitle,
                    views: data.items[0].statistics.viewCount,
                    ago: agos,
                  },
                ],
              });
            }

       
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } catch {
      console.log('No Json Response');
    }
    
  };

  // The Response

  constructor(props) {
    super(props);
    this.state = {
      theVideosList: [],
    };
  }
  render() {
    const _navMenu = () => this.props.navigation.toggleDrawer();
    const _searchBar = () => {
      this.props.navigation.navigate('Products');
    };

    return (
      <View style={{flex: 1}}>
        <AppbarHeader
          iconName="play-circle"
          heading="Videos"
          _navMenu={_navMenu}
          _searchBar={_searchBar}
        />
        {console.log('videolist', this.state.theVideosList)}
        {this.state.theVideosList.length > 0 ? (
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
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '80%',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              Oops! Check back in a while
            </Text>
          </View>
        )}
      </View>
    );
  }
}
