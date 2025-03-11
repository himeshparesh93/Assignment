import {Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PlayPauseObjType} from '../../types';
import styles from './styles';
import Resource from '../../res';

const HIDE_DURATION = 2000;
const PlayButton = (props: PlayPauseObjType) => {
  const [show, setshow] = useState(true);
  useEffect(() => {
    let timeOut = setTimeout(() => {
      if (props.isPlaying) {
        setshow(false);
      }
    }, HIDE_DURATION);
    if (!props.isPlaying) {
      setTimeout(() => {
        setshow(true);
      }, 100);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [props.isPlaying]);

  return (
    <Pressable
      hitSlop={props?.hitSlop ? props?.hitSlop : {top: 30, left: 30, right: 30}}
      onPress={props.onPress}
      style={[
        styles.container,
        {
          ...props?.containerStyle,
        },
      ]}>
      <Image
        source={
          props.isPlaying
            ? Resource.images.imgs.pause
            : Resource.images.imgs.play
        }
        style={[
          styles.image,
          {
            opacity: show ? 1 : 0,
          },
        ]}
      />
    </Pressable>
  );
};

export default PlayButton;
