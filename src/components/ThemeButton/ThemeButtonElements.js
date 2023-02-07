import styled from "styled-components";
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

export const Button = styled.button`
  background: none;
  border: none;
  float: right;
  padding: 0px;
  margin-left: 2.9rem;

  @media screen and (min-width: 480px) {
    margin-left: calc(100vw - 25.5rem);
  }
`;

export const ButtonWrapper = styled.div`
  width: 6rem;
  height: 100%;
  margin-top: 0;
`;

export const ButtonText = styled.h3`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-size: 0.8rem;
  font-family: 'Nunito Sans';
  font-weight: 600;
  width: 4.5rem;
  display: inline-block;
  margin: calc((10vh - 0.8rem) / 2) 0rem 0rem 0rem;

  @media screen and (min-width: 480px) {
    margin: calc((7vh - 0.8rem) / 2) 0rem 0rem 0rem;
  }
`;

export const DarkMoon = styled(IoMoonOutline)`
  font-size: 0.9rem;
  margin-right: 0.5rem;
  color: hsl(200, 15%, 8%);
  display: inline-block;
`;

export const LightMoon = styled(IoMoonSharp)`
  font-size: 0.9rem;
  margin-right: 0.5rem;
  color: hsl(0, 0%, 100%);
  display: inline-block;
`;