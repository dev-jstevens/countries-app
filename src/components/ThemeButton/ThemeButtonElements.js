import styled from "styled-components";
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

export const Button = styled.button`
  width: 30%;
  margin-right: 1em;
  background: none;
  border: none;
`;

export const ButtonWrapper = styled.div`
  width: 10em;
  margin-top: 10%;
`;

export const ButtonText = styled.h3`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 0.8em;
  font-family: 'Nunito Sans';
  font-weight: 600;
  margin: 0px;
  width: 6.5em;
  display: inline-block;
`;

export const DarkMoon = styled(IoMoonOutline)`
  font-size: 15px;
  color: #000;
  display: inline-block;
`;

export const LightMoon = styled(IoMoonSharp)`
  font-size: 15px;
  color: hsl(0, 0%, 100%);
  display: inline-block;
`;