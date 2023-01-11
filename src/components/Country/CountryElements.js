import styled from "styled-components";

export const CountryContainer = styled.li`
  width: 18.75em;
  height: 25em;
  color: hsl(0, 0%, 100%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const CountryFlag = styled.div`
  width: 18.75em;
  height: 11.5em;
`;

export const FlagImg = styled.img`
  width: 18.75em;
  margin: 0px;
`;

export const CountryName = styled.h2`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 1.5em;
  font-weight: 800;
  font-family: 'Nunito Sans';
`;

export const CountryInfo = styled.div`
  width: 18.75;
  height: 13.5em;
  background: hsl(0, 0%, 100%);
`;

export const Label = styled.h3`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 1em;
  font-weight: 600;
  font-family: 'Nunito Sans';
`;

export const CountryData = styled.p`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 1em;
  font-weight: 300;
  font-family: 'Nunito Sans';
`;