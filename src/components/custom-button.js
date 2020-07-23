import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const CustomButton = ({onPress, title, style, icon, textStyle}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{...styles.appButtonContainer, ...style}}>
    {icon ? (
      <FontAwesomeIcon icon={icon} size={26} style={styles.iconStyle} />
    ) : null}
    <Text
      style={{
        ...styles.appButtonText,
        ...textStyle,
        ...(icon && {left: 12}),
      }}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    position: 'relative',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  iconStyle: {color: '#fff', left: 22, position: 'absolute'},
});

export default CustomButton;
