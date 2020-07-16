/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step Two</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
//------------------------------------------------------------------------------
// Third Screen which will be used to show backpress
// import React, {Component} from 'react';
// //import react in our code.
// import {StyleSheet, View, Text, BackHandler, Button} from 'react-native';
// // import {Button} from 'react-native-paper';
// //import all the components we are going to use.

// export default class VideosScreen extends Component {
//   constructor(props) {
//     super(props);
//     //Binding handleBackButtonClick function with this
//     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
//   }
//   componentDidMount() {
//     // This is the first method in the activity lifecycle
//     // Addding Event Listener for the BackPress
//     BackHandler.addEventListener(
//       'hardwareBackPress',
//       this.handleBackButtonClick,
//     );
//   }
//   componentWillUnmount() {
//     // This is the Last method in the activity lifecycle
//     // Removing Event Listener for the BackPress
//     BackHandler.removeEventListener(
//       'hardwareBackPress',
//       this.handleBackButtonClick,
//     );
//   }
//   handleBackButtonClick() {
//     // Registered function to handle the Back Press
//     // To popup the default screen while going back you can use goBack
//     this.props.navigation.goBack(null);
//     // To exit from your App you can use BackHandler.exitApp();.
//     // Just comment the above line and uncomment the below to use it
//     //BackHandler.exitApp();
//     // Returning true means we have handled the backpress
//     // Returning false means we haven't handled the backpress
//     // Try to make it false also
//     return true;
//   }
//   static navigationOptions = {
//     title: 'Third Page',
//     //Sets Header text of Status Bar
//   };
//   render() {
//     console.log('Renderd');
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text>You are on Third Page</Text>
//         <Button title="" onPress={() => this.props.navigation.goBack()} />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//-----------------------------------------------------------------------------------------

//import YouTube from 'react-native-youtube';

// {
/* <YouTube
          apiKey="AIzaSyDwXJzJ-lO2cAOb9jrmFl717hjk-BSL5B8"
          videoId="8x947pqWayM" // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={(e) => this.setState({isReady: true})}
          onChangeState={(e) => this.setState({status: e.state})}
          onChangeQuality={(e) => this.setState({quality: e.quality})}
          onError={(e) => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        /> */
// }

// theImageList = [
//   'https://source.unsplash.com/1024x768/?nature',
//   'https://source.unsplash.com/1024x768/?water',
//   'https://source.unsplash.com/1024x768/?girl',
// ];

// bullet_points = [
//   'Lock bolts with combi cross recessed head',
//   'For horizontal and vertical applications',
//   'Profiled for extra strength',
//   'Screws secured with anti-loss washer',
//   'Material: steel',
//   'Electrogalvanized as per ASTM B 633',
//   'Standards (SC3), BS 1706 FE/ZN 12',
//   'Temperature resistance from -20 °C to +110 °C',
//   'Noise insulating lining, EPDM, black',
//   'Noise reduction up to 18dB (A).',
// ];
