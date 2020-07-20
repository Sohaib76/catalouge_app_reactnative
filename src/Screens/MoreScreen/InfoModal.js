import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  View,
} from 'react-native';
import {green} from '../../Components/PrimaryColors';

const InfoModal = ({modalVisible, setModalVisible, renderMessage, title}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{title}</Text>

            <View style={styles.inputView}>
              <Text>Name</Text>
              <TextInput
                placeholder="User Name"
                style={{height: 40}}
                onChangeText={(text) => setName(text)}
                value={name}
              />
            </View>
            <View style={styles.inputView}>
              <Text>Company Name</Text>
              <TextInput
                placeholder="Company Name"
                style={{height: 40}}
                onChangeText={(text) => setCompany(text)}
                value={company}
              />
            </View>
            <View style={styles.inputView}>
              <Text>Phone Number</Text>
              <TextInput
                placeholder="000 0000 000"
                style={{height: 40}}
                onChangeText={(text) => setPhone(text)}
                value={phone}
              />
            </View>
            <View style={styles.inputView}>
              <Text>Email</Text>
              <TextInput
                placeholder="example@gmail.com"
                style={{height: 40}}
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>
            <View style={styles.inputView}>
              <Text>Location</Text>
              <TextInput
                placeholder="000 0000 000"
                style={{height: 40}}
                onChangeText={(text) => setLocation(text)}
                value={location}
              />
            </View>

            {renderMessage && (
              <View style={styles.inputView}>
                <Text>Message</Text>
                <TextInput
                  placeholder="Type here..."
                  style={{height: 40}}
                  onChangeText={(text) => setMessage(text)}
                  value={message}
                />
              </View>
            )}

            <TouchableHighlight
              style={{...styles.openButton}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    marginTop: 30,
    paddingTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputLabel: {
    color: 'grey',
  },
  openButton: {
    padding: 15,
    width: 220,
    borderRadius: 100,
    backgroundColor: green,
  },
});

export default InfoModal;
