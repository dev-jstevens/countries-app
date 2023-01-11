import styled from "styled-components";
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

export const Button = styled.button`
  height: 25%;
  width: 30%;
  margin-top: 41.5px;
  margin-right: 1em;
  background: none;
  border: none;
`;

export const ButtonText = styled.h3`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 0.8em;
  font-family: 'Nunito Sans';
  font-weight: 600;
  margin: 0px;
  width: 10em;
`;

export const DarkMoon = styled(IoMoonOutline)`
  font-size: 15px;
  color: #000;
`;

export const LightMoon = styled(IoMoonSharp)`
  font-size: 15px;
  color: hsl(0, 0%, 100%);
`;