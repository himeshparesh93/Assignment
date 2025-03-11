import React, {useContext, useRef} from 'react';
import ReelScreen from './screens/ReelScreen';
import {VideoProvider} from './contenxtAPI';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <VideoProvider>
        <ReelScreen />
      </VideoProvider>
    </GestureHandlerRootView>
  );
};

export default App;
