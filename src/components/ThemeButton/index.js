import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { 
  Button,
  ButtonText,
  ButtonWrapper,
  DarkMoon,
  IconWrapper,
  LightMoon
} from './ThemeButtonElements';

const ThemeButton = () => {
  const {darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <Button onClick={handleTheme}>
      <ButtonWrapper>
        {darkMode ?  <LightMoon /> : <DarkMoon /> }
        <ButtonText darkMode={darkMode}>Dark Mode</ButtonText>
      </ButtonWrapper>
    </Button>
  );
};

export default ThemeButton;