import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({darkMode}) => (darkMode ? '#000' : 'hsl(0, 0%, 100%)')};
  width: 100vw;
  height: 15%;
  font-size: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0px;
  display: flex;
  position: relative;
`;

export const TextWrapper = styled.div`
  width: 10em;
  margin-left: 1em;
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const HeaderText = styled.h1`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 0.7em;
  font-family: 'Nunito Sans';
  font-weight: 800;
  margin-top: 0px;
  width: 10em;
`