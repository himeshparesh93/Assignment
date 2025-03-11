import Resource from '@root/res';
import {colors} from '@root/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.color1B3843,
  },
  txtUserName: {
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Medium,
      colors.white,
    ),
    paddingStart: 10,
  },
});

export default styles;
