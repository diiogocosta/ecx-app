import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import CustomButton from '../components/custom-button';
import { api } from '../services/api';

const Main = ({ navigation }) => {
  const image = require('../../assets/images/welcome.png');

  const changePage = (page) => {
    navigation.navigate(page);
  };
  return (
    <>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.brandText}>{'eCX'}</Text>
        <View style={{ width: '100%' }}>
          <CustomButton
            onPress={() => changePage('Onboarding')}
            title="Conecte com Facebook"
            style={styles.facebookBtn}
            icon={['fab', 'facebook-f']}
          />
          <CustomButton
            onPress={() => changePage('Login')}
            title="Login"
            style={styles.loginBtn}
          />
          <CustomButton
            onPress={() => changePage('Login')}
            title="Entrar como visitante"
          />
          <View style={styles.signUpContainer}>
            <Text style={{ fontSize: 18, color: '#fff', opacity: 0.8 }}>
              {'Não tem uma conta?'}
            </Text>
            <CustomButton
              style={{ paddingHorizontal: 0 }}
              textStyle={styles.signUpText}
              onPress={() => changePage('SignUp')}
              title="Cadastre"
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 26,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 50,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  facebookBtn: {
    backgroundColor: '#4267B2',
    width: '100%',
    marginBottom: 15,
  },
  loginBtn: {
    backgroundColor: '#FF3367',
    borderRadius: 25,
    padding: 20,
    width: '100%',
    marginBottom: 15,
  },
  signUpContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signUpText: {
    fontWeight: 'bold',
  },
});

export default Main;
