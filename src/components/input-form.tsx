import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputForm = ({
  label,
  secure,
  onChangeText,
}: {
  label?: string;
  secure?: boolean;
  onChangeText?: (text: string) => void;
}) => (
  <View style={{ width: '100%' }}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.inputBox}
      secureTextEntry={secure}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
  inputLabel: {
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  inputBox: {
    backgroundColor: '#404146',
    color: '#757B81',
    paddingHorizontal: 32,
    height: 60,
    marginBottom: 20,
  },
});

export default InputForm;
