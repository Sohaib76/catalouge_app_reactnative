import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import DataChart from '../../Components/DataChart';
import {IconButton} from 'react-native-paper';

import PDFView from 'react-native-view-pdf';
import PdfViewTest from '../../Components/PdfViewTest';
import ClosableModal from 'rn-closable-modal';

const DataModel = ({
  modalVisible,
  setModalVisible,
  theDataCel,
  thedataHeader,
  chart,
}) => {
  return (
    // <View style={styles.centeredView}>
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
      }}>
      {/* <Modal
        onDismiss={() => setModalVisible(false)}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}> */}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              alignItems: 'flex-end',
              backgroundColor: 'white',
              width: '100%',
            }}>
            <IconButton
              color="black"
              size={30}
              onPress={() => setModalVisible(false)}
              icon="close"></IconButton>
          </View>

          {/* <DataChart thedataHeader={thedataHeader} theDataCel={theDataCel} /> */}
          <PdfViewTest url={chart} />
          {console.log(chart)}
        </View>
      </View>
    </ClosableModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    // margin: 10,
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
    height: '95%',
    width: '95%',

    alignItems: 'center',
  },
});

export default DataModel;
