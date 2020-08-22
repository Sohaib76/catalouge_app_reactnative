import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import PdfViewTest from '../../Components/PdfViewTest';
import ClosableModal from 'rn-closable-modal';

const DataModel = ({
  modalVisible,
  setModalVisible,

  chart,
}) => {
  return (
 
    <ClosableModal
 
      animationType="slide"
 
      transparent={true}
     
      show={modalVisible}
      overlayColor={'rgba(0,0,0,0.8)'}
      onClose={() => {
        setModalVisible(false);
      }}>
   
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
