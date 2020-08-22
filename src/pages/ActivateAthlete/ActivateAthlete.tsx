import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View, Text} from 'react-native';
import InputForm from '../../components/input-form';
import CustomButton from '../../components/custom-button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IActivateUser} from '../../models/user';
import {activateUser} from '../../services/user';

const ActivateAthlete = () => {
  const navigation = useNavigation();
  const {userId}: any = useRoute().params;

  const image = require('../../../assets/images/logo-icone.png');

  const [form, setForm] = useState<IActivateUser>({
    about: '',
    birthDate: '',
    box: {
      id: '81763c01-9aa3-4cc7-bf63-0aed64d9ec25"',
    },
    weight: 0,
    genre: 'MALE',
  });

  const activate = () => {
    activateUser(userId, form)
      .then((response: any) => {
        console.log(response);
        // navigation.navigate('Onboarding', { userId: createdUser.id });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      <View>
        <Image source={image} style={styles.logoImg} />
        <InputForm
          label="Qual é o seu peso"
          onChangeText={(value) => setForm({...form, weight: parseInt(value)})}
        />
        <InputForm
          label="Quando você nasceu"
          onChangeText={(value) => setForm({...form, birthDate: value})}
        />
        <InputForm
          label="Qual é a cidade que você mora"
          // onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputForm
          label="Qual é o seu box"
          // onChangeText={(value) => setForm({ ...form, password: value })}
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
            }}>
            {'Aceitar os termos e condições'}
          </Text>
        </View>
      </View>
      <CustomButton
        onPress={() => activate()}
        title="Feito!"
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

export default ActivateAthlete;
