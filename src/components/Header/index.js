import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import {
  HeaderContainer,
  HeaderText,
  TextWrapper
} from './HeaderElements';
import ThemeButton from '../ThemeButton';



const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <HeaderContainer darkMode={darkMode}>
      <TextWrapper>
        <HeaderText darkMode={darkMode}>
          Where in the world?
        </HeaderText>
      </TextWrapper>
      <ThemeButton darkMode={darkMode} />
    </HeaderContainer>
  );
};

export default Header;