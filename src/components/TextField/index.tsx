import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import styles from './styles';
import {TextFieldObjType} from '@root/types';

const TextField = ({
  text,
  style,
  noOfLines,
  onPress,
  disabled,
}: TextFieldObjType) => {
  return (
    <Text
      suppressHighlighting={true}
      disabled={disabled ?? false}
      onPress={onPress}
      numberOfLines={noOfLines}
      style={[styles.txtTitle, style]}>
      {text}
    </Text>
  );
};

export default TextField;
