import ContextAPI from '@root/contenxtAPI';
import React, {useRef, useEffect, useState, useContext} from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import Loader from '../Loader';
import styles from './styles';
import PlayButton from '../PlayPauseButton';
import ReelHeader from '../ReelHeader';
import TextField from '../TextField';
import {AppString} from '@root/utils/constant';
import Mute from '../Mute';
import {State, TapGestureHandler} from 'react-native-gesture-handler';
import Heart from '../Heart';
import Resource from '@root/res';

const VideoComponent = ({item, index}) => {
  const videoRef = useRef(null);
  const isLengthGreater = item?.description.length > 40;
  const {state, videoRefs, isMuted} = useContext(ContextAPI);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(state.currentIndex === index);
  const [showMore, setShowMore] = useState(false);
  const [liked, setLiked] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    videoRefs.current[index] = videoRef;
    setIsPlaying(state.currentIndex === index);
  }, [index, state.currentIndex]);

  const handlePlayPause = () => {
    if (state.currentIndex === index) {
      setIsPlaying(!isPlaying);
    }
  };

  const renderSeeMoreLess = (text: string) => (
    <TouchableOpacity onPress={() => setShowMore(!showMore)}>
      <TextField
        style={styles.seeMore}
        text={text}
        onPress={() => setShowMore(!showMore)}
      />
    </TouchableOpacity>
  );

  const handleDoubleTap = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      setLiked(true);
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 200,
          delay: 400,
          useNativeDriver: true,
        }),
      ]).start(() => setLiked(false));
    }
  };

  return (
    <TapGestureHandler onHandlerStateChange={handleDoubleTap} numberOfTaps={2}>
      <View style={styles.container}>
        <ReelHeader userName={item?.user?.username} />
        <Mute />
        <Video
          ref={videoRef}
          source={{uri: item?.videoUrl}}
          style={styles.video}
          resizeMode="cover"
          paused={!isPlaying}
          repeat
          muted={isMuted}
          onLoadStart={() => setIsBuffering(true)}
          onBuffer={({isBuffering}) => setIsBuffering(isBuffering)}
          onReadyForDisplay={() => setIsBuffering(false)}
          onError={error => {
            setIsBuffering(false);
            console.log('Error while playing video', error);
          }}
        />
        {<Heart liked={liked} scaleAnim={scaleAnim} />}
        <View style={styles.bottomDescription}>
          <View style={styles.descBg} />
          {isLengthGreater ? (
            showMore ? (
              <>
                <Text style={styles.descText}>
                  {item?.description}
                  {renderSeeMoreLess(AppString['Read less'])}
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.descText}>
                  {`${item?.description.slice(0, 40)}... `}
                  {renderSeeMoreLess(AppString['Read more'])}
                </Text>
              </>
            )
          ) : (
            <TextField text={item?.description} style={styles.descText} />
          )}
        </View>
        <View style={styles.likesCommentsContainer}>
          <View style={styles.likeCommentContainer}>
            <Image
              source={Resource.images.imgs.like}
              style={styles.imgLikeComment}
            />
            <TextField text={item?.likes} style={styles.txtLikes} />
          </View>
          <View style={styles.likeCommentContainer}>
            <Image
              source={Resource.images.imgs.comment}
              style={styles.imgLikeComment}
            />
            <TextField text={item?.comments} style={styles.txtComments} />
          </View>
        </View>
        {isBuffering && <Loader loading />}

        <PlayButton isPlaying={isPlaying} onPress={handlePlayPause} />
      </View>
    </TapGestureHandler>
  );
};

export default VideoComponent;
