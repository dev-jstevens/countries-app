import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { 
  Button,
  ButtonText,
  DarkMoon,
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
      {darkMode ?  <LightMoon /> : <DarkMoon /> }
      <ButtonText darkMode={darkMode}>Dark Mode</ButtonText>
    </Button>
  );
};

export default ThemeButton;