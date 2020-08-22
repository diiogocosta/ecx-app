import React, {useState} from 'react';
import InputForm from '../../components/input-form';
import CustomButton from '../../components/custom-button';
import {StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {authenticateUser} from '../../services/auth';

const Login = () => {
  const [form, setForm] = useState<{username: string; password: string}>({
    username: '',
    password: '',
  });

  const navigator = useNavigation();

  const authenticate = () => {
    authenticateUser(form.username, form.password).then((response) => {
      console.log(response);
      navigator.navigate('Home');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputForm
        label="Usuário"
        onChangeText={(value) => setForm({...form, username: value})}
      />
      <InputForm
        label="Senha"
        secure={true}
        onChangeText={(value) => setForm({...form, password: value})}
      />
      <CustomButton
        onPress={() => authenticate()}
        title="Entrar"
        style={styles.primaryBtn}
      />
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

export default Login;
