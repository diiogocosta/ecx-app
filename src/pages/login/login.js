import React from 'react';
import {Button, Text} from 'react-native';

const Login = ({navigation}) => (
  <>
    <Button onPress={() => navigation.navigate('Main')} title="Back" />
    <Text>{'Login page'}</Text>
  </>
);

export default Login;
