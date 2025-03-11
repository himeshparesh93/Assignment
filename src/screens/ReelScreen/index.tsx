import VideoComponent from '@root/components/VideoComponent';
import ContextAPI from '@root/contenxtAPI';
import Resource from '@root/res';
import {getDeviceHeight} from '@root/utils/appUtils';
import {CURRENT_INDEX} from '@root/utils/constant';
import React, {useContext, useRef} from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const ReelScreen = () => {
  const {state, dispatch} = useContext(ContextAPI);
  const translateY = useRef(
    new Animated.Value(-state.currentIndex * getDeviceHeight()),
  ).current;

  const handleGestureEnd = event => {
    const {translationY, velocityY} = event.nativeEvent;
    let newIndex = state.currentIndex;
    const deviceHeight = getDeviceHeight();

    if (translationY < -deviceHeight * 0.3 || velocityY < -500) {
      newIndex = Math.min(
        state.currentIndex + 1,
        Resource.global.videoList.length - 1,
      );
    } else if (translationY > deviceHeight * 0.3 || velocityY > 500) {
      newIndex = Math.max(state.currentIndex - 1, 0);
    }

    if (newIndex !== state.currentIndex) {
      dispatch({type: CURRENT_INDEX, payload: newIndex});
    }

    Animated.spring(translateY, {
      toValue: -newIndex * deviceHeight,
      useNativeDriver: true,
    }).start();
  };

  return (
    <PanGestureHandler
      onHandlerStateChange={event => {
        if (event.nativeEvent.state === State.END) {
          handleGestureEnd(event);
        }
      }}>
      <Animated.View
        style={{flex: 1, width: '100%', transform: [{translateY}]}}>
        {Resource.global.videoList.map((video, index) => (
          <VideoComponent key={video.id} index={index} item={video} />
        ))}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default ReelScreen;
