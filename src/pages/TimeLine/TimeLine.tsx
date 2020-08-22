import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const TimeLine = () => {
  console.log('fonixxx');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text>{'TIME LINE HERE'}</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  primaryBtn: {
    backgroundColor: '#FF3367',
    borderRadius: 25,
    padding: 20,
    width: '100%',
    marginBottom: 25,
  },
});

export default TimeLine;
