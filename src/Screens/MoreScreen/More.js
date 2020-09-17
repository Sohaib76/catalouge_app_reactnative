import React, {useState} from 'react';
import {List, TouchableRipple, Divider, Snackbar} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {green, grey} from '../../Components/PrimaryColors';
import AppbarHeader from '../../Components/AppbarHeader';
import InfoModal from './InfoModal';
import {

  Image,
  Linking,
  
} from 'react-native';

export default function More({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  const _searchBar = () => {
    navigation.navigate('Products');
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const [visible, setVisible] = React.useState(false);


  const onDismissSnackBar = () => setVisible(false);

  const showModal = (x) => {
    setMessageModal(x);
    setModalVisible(true);
    console.log(messageModal);
  };

  return (
    <>
      <AppbarHeader
        iconName="alert-circle-outline"
        heading="More information"
        _navMenu={_navMenu}
        _searchBar={_searchBar}
      />

      {messageModal ? (
        <InfoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          renderMessage
          title="Send Us a Message"
          setVisible={setVisible}
        />
      ) : (
        <InfoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title="Type your details here:"
          renderMessage={false}
          setVisible={setVisible}
        />
      )}

      <ScrollView>
        <List.Section>
          <List.Subheader style={styles.more__listHeader}>
            Contact
          </List.Subheader>

          <TouchableRipple onPress={() => showModal(false)}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Call-Back"
              left={() => <List.Icon color={green} icon="phone" />}
            />
          </TouchableRipple>
          <Divider style={{elevation: 0, backgroundColor: 'black'}} />
          <TouchableRipple onPress={() => showModal(true)}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Send us a message"
              left={() => <List.Icon color={green} icon="email-minus" />}
            />
          </TouchableRipple>
          {/* <Divider style={{elevation: 0, backgroundColor: 'black'}} /> */}
        </List.Section>

        <List.Section>
          <List.Subheader style={styles.more__listHeader}>
            Connect with us
          </List.Subheader>

          <TouchableRipple
            onPress={() =>
              Linking.openURL('https://www.facebook.com/HiraWalraven/')
            }>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Facebook"
              left={() => <List.Icon color="#3b5998" icon="facebook" />}
            />
          </TouchableRipple>
          <Divider style={{elevation: 0, backgroundColor: 'black'}} />
          <TouchableRipple
            onPress={() =>
              Linking.openURL(
                'https://www.youtube.com/channel/UCqH-4meI8X2giZMHO-Y1idQ',
              )
            }>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Youtube"
              left={() => <List.Icon color="red" icon="youtube" />}
            />

            {/* youtube */}
            {/* https://www.youtube.com/channel/UCFChd_w024Jyn97hdjaB8kQ/ */}
          </TouchableRipple>
          <Divider style={{elevation: 0, backgroundColor: 'black'}} />

          <TouchableRipple
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/company/hira-walraven')
            }>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="LinkedIn"
              left={() => <List.Icon color="#2867B2" icon="linkedin" />}
            />
          </TouchableRipple>
          <Divider style={{elevation: 0, backgroundColor: 'black'}} />
          <TouchableRipple
            onPress={() =>
              Linking.openURL('https://www.instagram.com/hirawalraven/')
            }>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Instagram"
              left={() => (
                <List.Icon
                  color="#C13584"
                  icon={() => (
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 20,
                      }}
                      source={require('../../Images/Others/insta.png')}
                    />
                  )}
                />
              )}
            />
          </TouchableRipple>
          {/* <Divider style={{elevation: 0, backgroundColor: 'black'}} /> */}
        </List.Section>

        <List.Section>
          <List.Subheader style={styles.more__listHeader}>
            Further Information
          </List.Subheader>

          <TouchableRipple
            onPress={() =>
              Linking.openURL('https://hirawalraven.com/careers/')
            }>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Careers"
              left={() => <List.Icon color={green} icon="contacts" />}
            />
          </TouchableRipple>
          <Divider style={{elevation: 0, backgroundColor: 'black'}} />
          <TouchableRipple
            onPress={() => Linking.openURL('https://hirawalraven.com')}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Learn more about us"
              left={() => <List.Icon color={green} icon="puzzle" />}
            />
          </TouchableRipple>
          {/* <Divider style={{elevation: 0, backgroundColor: 'black'}} /> */}
        </List.Section>
      </ScrollView>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Thankyou! Message has been delivered
      </Snackbar>
    </>
  );
}
