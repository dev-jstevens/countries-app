import styled from "styled-components";

export const CountryContainer = styled.li`
  width: 18.75em;
  background: hsl(0, 0%, 100%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-top: 2px;
  margin-bottom: 50px;
  margin-left: 37.5px;
  border-radius: 10px;
`;

export const CountryFlag = styled.div`
  width: 18.75em;
  background: hsl(0, 0%, 100%);
  margin: 0px;
  padding: 0px;
  border-radius: 10px 10px 0 0;
`;

export const FlagImg = styled.img`
  width: 18.75em;
  margin: 0px;
  border-radius: 10px 10px 0 0;
`;

export const CountryName = styled.h2`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 1.5em;
  font-weight: 800;
  font-family: 'Nunito Sans';
  margin-bottom: 5px;
  margin-top: 0px;
`;

export const CountryInfo = styled.div`
  width: 18.75;
  background: hsl(0, 0%, 100%);
  border-radius: 0 0 10px 10px;
`;

export const InforWrapper = styled.div`
  width: 16em;
`;

export const Label = styled.h3`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 1em;
  font-weight: 600;
  font-family: 'Nunito Sans';
  display: inline-block;
`;

export const CountryData = styled.p`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 1em;
  font-weight: 300;
  font-family: 'Nunito Sans';
  display: inline-block;
`;