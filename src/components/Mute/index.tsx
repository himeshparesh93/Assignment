import React from 'react';
import ContextAPI from '@root/contenxtAPI';
import {useContext} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Resource from '@root/res';
import styles from './styles';

const Mute = () => {
  const {isMuted, setIsMuted} = useContext(ContextAPI);
  const toggleMute = () => setIsMuted(prev => !prev);

  return (
    <TouchableOpacity onPress={toggleMute} style={styles.container}>
      <Image
        source={
          isMuted ? Resource.images.imgs.mute : Resource.images.imgs.unmute
        }
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default Mute;
