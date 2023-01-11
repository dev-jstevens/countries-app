import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({darkMode}) => (darkMode ? '#000' : 'hsl(0, 0%, 100%)')};
  width: 100vw;
  height: 15vh;
  font-size: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0px;
  display: flex;
`;

export const TextWrapper = styled.div`
  height: 25%;
  width: 10em;
  margin-top: 41.5px;
  margin-left: 1em;
`;

export const HeaderText = styled.h1`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : '#000')};
  font-size: 0.7em;
  font-family: 'Nunito Sans';
  font-weight: 800;
  margin: 0px;
  width: 10em;
`