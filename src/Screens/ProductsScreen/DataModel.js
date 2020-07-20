import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import DataChart from '../../Components/DataChart';
import {IconButton} from 'react-native-paper';

const DataModel = ({
  modalVisible,
  setModalVisible,
  theDataCel,
  thedataHeader,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        onDismiss={() => setModalVisible(false)}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <IconButton
              color="black"
              size={30}
              onPress={() => setModalVisible(false)}
              icon="close"></IconButton>
            <DataChart thedataHeader={thedataHeader} theDataCel={theDataCel} />
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
    borderRadius: 30,
    padding: 20, //30
    marginBottom: 20,
    marginTop: 30,
    paddingTop: 10,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default DataModel;
