import React from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';

const Login = ({navigation}) => (
  <>
    {/* <Button onPress={() => navigation.navigate('Main')} title="Back" />
    <Text>{'Login page'}</Text> */}
    <Swiper style={styles.wrapper} loop={false}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  </>
);


export default Login;
