import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../../theme';

function Loader({loading}: {loading?: boolean}) {
  return (
    <View style={{position: 'absolute', zIndex: 1, top: 400}}>
      <ActivityIndicator
        animating={loading}
        size="large"
        color={colors.white}
      />
    </View>
  );
}

export default Loader;
