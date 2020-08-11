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
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ClosableModal from 'rn-closable-modal';
import {sendEmail} from '../../Components/SendMail';

const InfoModal = ({modalVisible, setModalVisible, renderMessage, title}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (name === '') {
      setNameError('Field Required');
    } else {
      setNameError(null);
    }
    if (company.trim() === '') {
      setCompanyError('Field Required');
    } else {
      setCompanyError(null);
    }
    if (phone == '') {
      setPhoneError('Field Required');
    } else {
      setPhoneError(null);
    }
    if (email == '') {
      setEmailError('Field Required');
    } else {
      setEmailError(null);
    }
    if (location == '') {
      setLocationError('Field Required');
    } else {
      setLocationError(null);
    }
    if (message == '') {
      setMessageError('Field Required');
    } else {
      setMessageError(null);
    }
    if (
      name.trim() === '' ||
      company.trim() === '' ||
      phone.trim() === '' ||
      email.trim() === '' ||
      location.trim() === '' ||
      (renderMessage && message.trim() === '')
    ) {
      console.log('Required');
    } else {
      setModalVisible(!modalVisible);
      resetValues();
      nullValues();
      sendEmail(
        'sumaiz@clicktap.ae',
        'Dear Admin,',
        `Following message has been sent by ${name}:\n

      Type: ${renderMessage ? 'Message' : 'Callback'}\n
      Name: ${name}\n
      Company Name: ${company}\n
      Phone: ${phone}\n
      Email: ${email}\n
      Location: ${location}\n
        
      ---\n\n
      Diamond Walraven`,
      ).then(() => {
        console.log('Our email successful provided to device mail ');
      });
      console.log('Message Sent');
    }
    // if (name === '' || company === '') {
    //   // company.trim() === '' &&
    //   // phone.trim() === '' &&
    //   // email.trim() == '' &&
    //   // location.trim() === '' &&
    //   // message.trim() === ''
    //   setNameError('Field required.');
    // } else {
    //   setModalVisible(!modalVisible);
    //   resetValues();
    //   setNameError(null);
    //   console.log('Message Sent');
    // }
  };

  const [nameError, setNameError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [messageError, setMessageError] = useState('');

  const resetValues = () => {
    setName('');
    setCompany('');
    setPhone('');
    setEmail('');
    setLocation('');
    setMessage('');
  };

  const nullValues = () => {
    setNameError(null);
    setCompanyError(null);
    setPhoneError(null);
    setEmailError(null);
    setLocationError(null);
    setMessageError(null);
  };

  return (
    // <TouchableWithoutFeedback
    //   style={{backgroundColor: 'red', flex: 1, width: 100, height: 100}}
    //   onPress={() => {
    //     // setModalVisible(false);
    //     console.log('Pressed outside Modal');
    //   }}>
    <View style={styles.centeredView}>
      <ClosableModal
        // style={{backgroundColor: 'red'}}
        animationType="slide"
        // backdropOpacity={0.3}
        transparent={true}
        // visible={modalVisible}
        show={modalVisible}
        overlayColor={'rgba(0,0,0,0.8)'}
        onClose={() => {
          setModalVisible(false);

          resetValues();
          nullValues();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <TouchableWithoutFeedback */}
            {/* style={styles.modalView}
          onPress={() => console.log('PPP')}> */}
            <Text style={styles.modalText}>{title}</Text>
            <View style={styles.inputView}>
              <Text>Name</Text>
              <TextInput
                placeholder="User Name"
                style={{height: 40}}
                onChangeText={(text) => {
                  setNameError(null);
                  setName(text);
                }}
                value={name}
              />
              {!!nameError && <Text style={{color: 'red'}}>{nameError}</Text>}
            </View>
            <View style={styles.inputView}>
              <Text>Company Name</Text>
              <TextInput
                placeholder="XYZ Digital"
                style={{height: 40}}
                onChangeText={(text) => {
                  setCompanyError(null);
                  setCompany(text);
                }}
                value={company}
              />
              {!!companyError && (
                <Text style={{color: 'red'}}>{companyError}</Text>
              )}
            </View>
            <View style={styles.inputView}>
              <Text>Phone Number</Text>
              <TextInput
                placeholder="000 0000 000"
                style={{height: 40}}
                onChangeText={(text) => {
                  setPhoneError(null);
                  setPhone(text);
                }}
                value={phone}
              />
              {!!phoneError && <Text style={{color: 'red'}}>{phoneError}</Text>}
            </View>
            <View style={styles.inputView}>
              <Text>Email</Text>
              <TextInput
                placeholder="example@gmail.com"
                style={{height: 40}}
                onChangeText={(text) => {
                  setEmailError(null);
                  setEmail(text);
                }}
                value={email}
              />
              {!!emailError && <Text style={{color: 'red'}}>{emailError}</Text>}
            </View>
            <View style={styles.inputView}>
              <Text>Location</Text>
              <TextInput
                placeholder="Your Location"
                style={{height: 40}}
                onChangeText={(text) => {
                  setLocationError(null);
                  setLocation(text);
                }}
                value={location}
              />
              {!!locationError && (
                <Text style={{color: 'red'}}>{locationError}</Text>
              )}
            </View>
            {renderMessage && (
              <View style={styles.inputView}>
                <Text>Message</Text>
                <TextInput
                  placeholder="Type here..."
                  style={{height: 40}}
                  onChangeText={(text) => {
                    setMessageError(null);
                    setMessage(text);
                  }}
                  value={message}
                />
                {!!messageError && (
                  <Text style={{color: 'red'}}>{messageError}</Text>
                )}
              </View>
            )}

            <TouchableHighlight
              style={{...styles.openButton}}
              onPress={() => {
                sendMessage();
              }}>
              <Text style={styles.textStyle}>Submit</Text>
            </TouchableHighlight>
            {/* </TouchableWithoutFeedback> */}
          </View>
        </View>
      </ClosableModal>
    </View>
    /* </TouchableWithoutFeedback> */
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
    width: 290, //250
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
