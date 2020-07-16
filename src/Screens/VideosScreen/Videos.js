import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import VideoDetails from '../../Components/VideoDetails';
import AppbarHeader from '../../Components/AppbarHeader';

const theVideosList = [
  {
    videoUrl: 'https://www.youtube.com/watch?v=Zwu2HjU7pXY',
    name: 'Hire Walraven Inauguration Video',
    tag: 'Hira Walraven LLC',
    views: '842',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=Zwu2HjU7pXY',
    name: 'Hire Walraven Inauguration Video',
    tag: 'Hira Walraven LLC',
    views: '842',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=Zwu2HjU7pXY',
    name: 'Hire Walraven Inauguration Video',
    tag: 'Hira Walraven LLC',
    views: '842',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=Zwu2HjU7pXY',
    name: 'Hire Walraven Inauguration Video',
    tag: 'Hira Walraven LLC',
    views: '842',
    ago: '2',
  },
  {
    videoUrl: 'https://www.youtube.com/watch?v=Zwu2HjU7pXY',
    name: 'Hire Walraven Inauguration Video',
    tag: 'Hira Walraven LLC',
    views: '842',
    ago: '2',
  },
];

export default class VideosScreen extends PureComponent {
  state = {
    videoList: theVideosList,
  };
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
        <ScrollView>
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
