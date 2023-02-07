import React, { useContext } from 'react';
import { LoadingBg, LoadingText, LoadingTextWrapper } from './LoadingScreenElements';
import { ThemeContext } from '../../ThemeContext';

const LoadingScreen = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <LoadingBg darkMode={darkMode}>
      <LoadingTextWrapper>
        <LoadingText darkMode={darkMode}>Loading...</LoadingText>
      </LoadingTextWrapper>
    </LoadingBg>
  );
};

export default LoadingScreen;