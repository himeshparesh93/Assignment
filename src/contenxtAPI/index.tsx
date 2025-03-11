import {CURRENT_INDEX} from '@root/utils/constant';
import React, {createContext, useReducer, useRef, useState} from 'react';

const ContextAPI = createContext(null);

const videoReducer = (state, action) => {
  switch (action.type) {
    case CURRENT_INDEX:
      return {...state, currentIndex: action.payload};
    default:
      return state;
  }
};

export const VideoProvider = ({children}) => {
  const [state, dispatch] = useReducer(videoReducer, {currentIndex: 0});
  const [isMuted, setIsMuted] = useState(false);

  const videoRefs = useRef({});

  return (
    <ContextAPI.Provider
      value={{state, dispatch, videoRefs, isMuted, setIsMuted}}>
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextAPI;
