import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import VideoDetails from '../../Components/VideoDetails';
import AppbarHeader from '../../Components/AppbarHeader';

//https://pusher.com/tutorials/youtube-react-native
//For fetching videos from a playlist

// https://developers.google.com/youtube/v3/docs/videos
// https://stackoverflow.com/questions/18953499/youtube-api-to-fetch-all-videos-on-a-channel

const theVideosList = [
  {
    videoUrl: 'https://www.youtube.com/watch?v=VAAwDB_Q6p0',
    name: 'Hire Walraven Inauguration Video',
    tag: 'Hira Walraven LLC',
    views: '922',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=s82U0LiuOlM',
    name: 'Interview with Ravi Wadhwani,general manager of Hira Walraven,UAE',
    tag: 'Logsitics Middle East',
    views: '307',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=DlSmyswIWoo',
    name: '#LeadersTalk with Hira Walraven,Ravi Radhwani,General Manager',
    tag: 'GineersNow',
    views: '400',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=OsCOsnOQ9x0',
    name: 'Swiss Bureau: Office Design & Build for HIRA Walraven',
    tag: 'Swiss Bureau Interior Design',
    views: '6859',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=Yr8DD2BES7k',
    name: '#Leaders Talk with Hira Walraven, Khalid Khalifa, Technical Manager',
    tag: 'GineersNow',
    views: '351',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=60jXSuqsSJM',
    name: 'Hira Walraven Factory Opening',
    tag: 'Fredpaille',
    views: '530',
    ago: '2',
  },
];

export default class VideosScreen extends PureComponent {
  state = {
    videoList: [],
  };

  componentDidMount() {
    this.setState({videoList: theVideosList});
    console.disableYellowBox = true;
  }

  render() {
    const _navMenu = () => this.props.navigation.toggleDrawer();
    console.log('Videos Render');
    return (
      <>
        <AppbarHeader
          iconName="play-circle"
          heading="Videos"
          _navMenu={_navMenu}
        />
        <ScrollView style={{paddingTop: 15}}>
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
        </ScrollView>
      </>
    );
  }
}
