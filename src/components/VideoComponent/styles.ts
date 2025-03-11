import Resource from '@root/res';
import {colors} from '@root/theme';
import {getDeviceHeight} from '@root/utils/appUtils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: getDeviceHeight(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {width: '100%', height: '100%'},
  loader: {position: 'absolute'},
  seeMore: {
    paddingHorizontal: 5,
    color: colors.white,
    textAlign: 'right',
    fontWeight: '700',
    top: 3,
  },
  descText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.white,
    lineHeight: 20,
  },
  bottomDescription: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 15,
    paddingBottom: 55,
  },
  descBg: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    backgroundColor: colors.color000000,
    borderRadius: 5,
  },
  likesCommentsContainer: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    alignItems: 'center',
  },
  txtLikes: {
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Medium,
      colors.white,
    ),
  },
  txtComments: {
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Medium,
      colors.white,
    ),
  },
  imgLikeComment: {
    width: 30,
    height: 30,
  },
  likeCommentContainer: {
    marginBottom: 30,
  },
});

export default styles;
