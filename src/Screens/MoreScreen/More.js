import React, {useState} from 'react';
import {List, TouchableRipple, Divider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {green, grey} from '../../Components/PrimaryColors';
import AppbarHeader from '../../Components/AppbarHeader';
import InfoModal from './InfoModal';

export default function More({navigation}) {
  const _navMenu = () => navigation.toggleDrawer();

  const [modalVisible, setModalVisible] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

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
      />

      {messageModal ? (
        <InfoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          renderMessage
          title="Send Us a Message"
        />
      ) : (
        <InfoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title="Type your details here:"
          renderMessage={false}
        />
      )}

      <ScrollView>
        <List.Section>
          <List.Subheader style={styles.more__listHeader}>
            Contact
          </List.Subheader>

          <TouchableRipple>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Call-Back"
              left={() => <List.Icon color={green} icon="phone" />}
            />
          </TouchableRipple>
          <Divider />
          <TouchableRipple onPress={() => showModal(true)}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Send us a message"
              left={() => <List.Icon color={green} icon="email-minus" />}
            />
          </TouchableRipple>
          <Divider />
        </List.Section>

        <List.Section>
          <List.Subheader style={styles.more__listHeader}>
            Connect with us
          </List.Subheader>

          <TouchableRipple onPress={() => console.log('Pressed')}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Facebook"
              left={() => <List.Icon color="#3b5998" icon="facebook" />}
            />
          </TouchableRipple>
          <Divider />
          <TouchableRipple onPress={() => console.log('Pressed')}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Instagram"
              left={() => <List.Icon color="#C13584" icon="instagram" />}
            />
          </TouchableRipple>
          <Divider />
          <TouchableRipple onPress={() => console.log('Pressed')}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="LinkedIn"
              left={() => <List.Icon color="#2867B2" icon="linkedin" />}
            />
          </TouchableRipple>
          <Divider />
        </List.Section>

        <List.Section>
          <List.Subheader style={styles.more__listHeader}>
            Further Information
          </List.Subheader>

          <TouchableRipple onPress={() => console.log('Pressed')}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Carriers"
              left={() => <List.Icon color={green} icon="contacts" />}
            />
          </TouchableRipple>
          <Divider />
          <TouchableRipple onPress={() => showModal(false)}>
            <List.Item
              titleStyle={{fontSize: 18, color: grey}}
              title="Learn more about us"
              left={() => <List.Icon color={green} icon="puzzle" />}
            />
          </TouchableRipple>
          <Divider />
        </List.Section>
      </ScrollView>
    </>
  );
}