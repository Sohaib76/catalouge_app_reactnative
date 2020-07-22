import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import {green} from './PrimaryColors';

export default function HomeCard({navigation, img, text, navigateTo}) {
  const [pressStatus, setpressStatus] = useState(false);

  _onHideUnderlay = () => {
    setpressStatus(false);
  };

  _onShowUnderlay = () => {
    setpressStatus(true);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <TouchableHighlight
          style={{height: '100%'}}
          activeOpacity={1}
          onShowUnderlay={_onShowUnderlay}
          onHideUnderlay={_onHideUnderlay}
          underlayColor={green}
          onPress={() => navigation.navigate(navigateTo)}>
          <>
            <View
              style={{
                flex: 5,
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Image
                style={{
                  tintColor: pressStatus ? 'yellow' : green,
                }}
                source={img}
              />
            </View>
            <View>
              <Text style={pressStatus ? styles.textPress : styles.text}>
                {text}
              </Text>
            </View>
          </>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    borderRadius: 15,
    borderColor: '#005D40',
    borderWidth: 4,
    alignItems: 'center',
  },

  text: {
    fontSize: 15,
    flex: 0,
    fontWeight: 'bold',
    color: green,
    marginBottom: 15,
    textAlign: 'center',
  },
  textPress: {
    fontSize: 15,
    flex: 0,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
});
