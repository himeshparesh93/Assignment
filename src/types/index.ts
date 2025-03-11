import {
  GestureResponderEvent,
  Insets,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type PlayPauseObjType = {
  onPress: (event: GestureResponderEvent) => void;
  isPlaying: boolean;
  containerStyle?: ViewStyle;
  hitSlop?: null | Insets | number | undefined;
};

export type TextFieldObjType = {
  text: string | undefined | any;
  style?: StyleProp<TextStyle>;
  noOfLines?: number;
  onPress?: () => void;
  disabled?: boolean;
};
