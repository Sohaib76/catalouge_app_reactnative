// import React from 'react';
// import {View, Text} from 'react-native';
// import {WebView} from 'react-native-webview';
// import PDFView from 'react-native-view-pdf';

// export default function PdfViewTest() {
//   return (
//     <View style={{flex: 1}}>
//       <WebView
//         source={{
//           uri: 'http://www.africau.edu/images/default/sample.pdf',
//         }}
//       />

//       <Text>asf</Text>
//     </View>
//   );
// }

//Links
//https://github.com/wonday/react-native-pdf
//https://stackoverflow.com/questions/42597024/react-native-allow-device-rotation-only-when-webview-plays-video

// import PDFView from 'react-native-view-pdf';
// import React from 'react';
// import {View, Text} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';

// const resources = {
//   file:
//     Platform.OS === 'ios'
//       ? 'downloadedDocument.pdf'
//       : '/sdcard/Download/downloadedDocument.pdf',
//   url:
//     'https://roundcomm.com/demos/hirawalraven/uploads/product_brochures/1595689398-app-updated.pdf',
//   base64: 'JVBERi0xLjMKJcfs...',
// };

// export default class App extends React.Component {
//   render() {
//     const resourceType = 'url';

//     return (
//       // <View style={{flex: 1}}>
//       <View style={{flex: 1}}>
//         <PDFView
//           fadeInDuration={250.0}
//           style={{flex: 1}}
//           resource={resources[resourceType]}
//           resourceType={resourceType}
//           onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
//           onError={(error) => console.log('Cannot render PDF', error)}
//         />
//       </View>
//     );
//   }
// }

/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

import Pdf from 'react-native-pdf';

export default class PdfViewTest extends React.Component {
  render() {
    const source = {
      uri: this.props.url,
      cache: true,
    };
    //const source = require('./test.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf'};

    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

    return (
      <View style={styles.container}>
        <Pdf
          horizontal={true}
          selectable={true}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link presse: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // marginTop: 25,
    // marginLeft: 80,
    // marginRight: 180,
    // textAlign: 'center',
  },
  pdf: {
    flex: 1,
    // width: 320,
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').height - 250,

    // height: Dimensions.get('window').height,
    // marginLeft: 80,
    // marginRight: 80,
    // backgroundColor: 'red',
  },
});
