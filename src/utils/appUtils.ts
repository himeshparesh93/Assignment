import {Dimensions, Platform} from 'react-native';

export const isAndroid: boolean = Platform.OS === 'android';

export const getDeviceWidth = () => {
  return Math.round(Dimensions.get('window').width);
};

export const getDeviceHeight = () => {
  return Math.round(Dimensions.get('window').height);
};
