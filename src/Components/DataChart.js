import React from 'react';
import {View, Text} from 'react-native';
import {DataTable, Dialog} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

export default function DataChart({theDataCel, thedataHeader}) {
  console.log('Fav Rendered');

  const alternatingColor = ['rgba(14,107,21,0.3)', '#fff'];

  return (
    <ScrollView
      horizontal={true}
      color="green"
      indicatorStyle="white"
      style={{color: 'red'}}>
      <DataTable
        style={{
          margin: 0,
          elevation: 1,
          borderRadius: 2,
          marginBottom: 40,
        }}>
        <DataTable.Header
          style={{
            backgroundColor: 'rgba(14,107,21,0.6)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {thedataHeader.map((dh, id) => (
            <DataTable.Title key={id} style={styles.dataheader}>
              <Text style={styles.dataheader__text}>{dh}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: 'black',
          }}></View>

        <View style={{marginTop: 20}}>
          {theDataCel.map((data, id) => (
            //26
            <View
              key={id}
              style={{
                margin: 1,

                backgroundColor: alternatingColor[id % alternatingColor.length],
              }}>
              <DataTable.Row
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',

                  height: 20,
                }}>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.one}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.two}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.three}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.four}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.five}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.six}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.seven}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.eight}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.nine}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.ten}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.datacell}>
                  <Text style={styles.datacell__text}>{data.eleven}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </View>
          ))}
        </View>
      </DataTable>
    </ScrollView>
  );
}

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  datacell: {
    marginTop: -30,
    width: 100,
  },
  datacell__text: {
    color: '#434442',
  },
  dataheader: {
    width: 100,
  },
  dataheader__text: {
    color: '#000',

    fontSize: 14,
  },
});
