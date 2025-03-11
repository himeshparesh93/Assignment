import Resource from '@root/res';
import {colors} from '@root/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  txtTitle: {
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.SubTitle,
      colors.black,
    ),
  },
});

export default styles;
