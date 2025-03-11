import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import TextField from '../TextField';

const ReelHeader = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://avatar.iran.liara.run/public/boy?username=Ash'}}
        style={styles.imgProfile}
      />
      <TextField
        text={props?.userName ?? ''}
        noOfLines={1}
        style={styles.txtUserName}
      />
    </View>
  );
};

export default ReelHeader;
