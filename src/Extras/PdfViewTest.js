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

