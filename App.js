import React, {Component} from 'react';
import {StatusBar, RefreshControl, View, Platform} from 'react-native';
import DrawerNavigation from './NavigationController';
import PdfViewTest from './src/Components/PdfViewTest';
import {setCustomText} from 'react-native-global-props';
import TestRefreshControl from './src/Components/TestRefreshControl';
import Splash from './src/Screens/SplashScreen/SplashScreen';


const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

function StatusBarPlaceHolder() {
  return (
      <View style={{
          width: "100%",
          height: STATUS_BAR_HEIGHT,
          backgroundColor: "#fff"
      }}>
          <StatusBar
              barStyle="dark-content"
          />
      </View>
  );
}

export default class App extends Component {
  state={
    isVisible : true
  }
componentDidMount(){
  setTimeout(()=> {
    this.setState({isVisible:false});
  }, 5000);
}


  render() {
    const customTextProps = {
      style: {
        fontFamily: 'AgfaRotisSansSerifExtraBold',
        // AGFAROTISSANSSERIFEXTRABOLD
        
      },
    };

    setCustomText(customTextProps);

  

    // useEffect(() => {
    //   setTimeout(function () {
    //     this.setState({isVisible:false});
    //   }, 5000);
    // }, []);

    return (
      <>
      {
        Platform.OS === 'ios' &&  <StatusBarPlaceHolder/>
      }
                     

        {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" hidden={false}/> */}
        {/* <StatusBar backgroundColor="#005D40" barStyle="dark-content" /> */}
        {/* <PdfViewTest /> */}
        {/* <TestRefreshControl /> */}
        {this.state.isVisible ? <Splash /> : null}
        <DrawerNavigation />
      </>
    );
  }
}
