import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import InputForm from '../../components/input-form';
import CustomButton from '../../components/custom-button';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import signupService from './signup-service';
import { User } from 'src/models/user';

const SignUp = () => {
  const navigation = useNavigation();
  const image = require('../../../assets/images/logo-icone.png');

  const [form, setForm] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const signUp = () => {
    signupService
      .signup(form)
      .then((createdUser) => {
        navigation.navigate('Onboarding', { userId: createdUser.id });
      })
      .catch(() => {
        signupService.tempGetUser(form.email).then((rawuser) => {
          navigation.navigate('Onboarding', {
            userId: rawuser.content[0].id,
          });
        });
      });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Image source={image} style={styles.logoImg} />
        <InputForm
          label="Primeiro nome"
          onChangeText={(value) => setForm({ ...form, firstName: value })}
        />
        <InputForm
          label="Ultimo nome"
          onChangeText={(value) => setForm({ ...form, lastName: value })}
        />
        <InputForm
          label="E-mail"
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputForm
          label="Senha"
          secure={true}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        {/* <InputForm
          label="Confirmar senha"
          secure={true}
          onChangeText={(value) =>
            setForm({ ...form, passwordConfirmation: value })
          }
        /> */}
        <View style={styles.checkbox}>
          {/* <CheckBox
            style={styles.checkbox}
            tintColors={{
              true: '#FF3367',
              false: 'white',
            }}
            value={form.acceptConditions}
            onValueChange={() =>
              setForm({ ...form, acceptConditions: !form.acceptConditions })
            }
          /> */}
          <Text
            style={{
              color: '#757B81',
              marginLeft: 8,
            }}
          >
            {'Aceitar os termos e condições'}
          </Text>
        </View>
      </View>
      <CustomButton
        onPress={() => signUp()}
        title="Cadastrar"
        style={styles.primaryBtn}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#323337',
    padding: 16,
  },
  logoImg: {
    alignSelf: 'center',
    marginBottom: 60,
  },
  primaryBtn: {
    backgroundColor: '#FF3367',
    borderRadius: 25,
    padding: 20,
    width: '100%',
    marginBottom: 25,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUp;
