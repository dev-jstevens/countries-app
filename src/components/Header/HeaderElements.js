import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  width: 100%;
  height: 10vh;
  font-size: 1.2rem;
  box-shadow: ${({darkMode}) => (darkMode ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : '0px 2px 5px rgba(0, 0, 0, 0.05)')};
  display: flex;
  position: relative;
  border-color: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 480px) {
    height: 7vh;
  }
`;

export const TextWrapper = styled.div`
  width: 12rem;
  margin-left: 1.3rem;
  margin-top: calc((10vh - 20px) / 2);

  @media screen and (min-width: 480px) {
    width: 12rem;
    margin-left: 4rem;
    margin-top: calc((7vh - 26px) / 2);
  }
`;

export const HeaderText = styled.h1`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-size: 0.9rem;
  font-family: 'Nunito Sans';
  font-weight: 800;
  margin: 0px;
  width: 9rem;

  @media screen and (min-width: 480px) {
    font-size: 1em;
    width: 12rem;
  }
`