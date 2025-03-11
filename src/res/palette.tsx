import {colors} from '@root/theme';
import {FlexStyle, ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type StyleType = ViewStyle | TextStyle | ImageStyle | FlexStyle | any;

export enum FontSizes {
  Header = 30,
  SubHeader = 28,
  Body = 24,
  Body25 = 25,
  Title = 20,
  Large = 18,
  SemiLarge = 17,
  Medium = 16,
  small15 = 15,
  Small = 14,
  SubTitle = 12,
  Label = 13,
  SubSmallTitle = 10,
  verySmall = 8,
  extraLarge = 40,
  Font22 = 22,
}

export const setColor = (value: string) => {
  return {color: value};
};
export const setFontSize = (value: FontSizes) => {
  return {fontSize: value};
};

export const StyleText = (
  fontSize: FontSizes = FontSizes.Medium,
  color: string = colors.black,
): StyleType => {
  return {
    ...setFontSize(fontSize),
    ...setColor(color),
  };
};
