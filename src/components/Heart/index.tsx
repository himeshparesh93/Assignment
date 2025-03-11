import React from 'react';
import {Animated} from 'react-native';
import styles from './styles';

const Heart = (props: any) => {
  const {scaleAnim, liked} = props;
  return (
    liked && (
      <Animated.Text
        style={[
          styles.heart,
          {
            transform: [{scale: scaleAnim}],
          },
        ]}>
        ❤️
      </Animated.Text>
    )
  );
};

export default Heart;
