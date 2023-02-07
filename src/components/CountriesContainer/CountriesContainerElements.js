import styled from "styled-components";

export const Container = styled.main`
  background: ${({darkMode}) => (darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)')};
  width: 100%;
  padding-top: 2.5rem;
  min-height: 100vh;
`;

export const ControlContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 750px) {
    width: 500px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CountriesList = styled.ul`
  background: ${({darkMode}) => (darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)')};
  width: 100vw;
  margin: 0px;
  padding: 0px;
  list-style: none;

  @media screen and (min-width: 480px) {
    width: 99%;
  }
`;

export const Loading = styled.div`
  background: ${({darkMode}) => (darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)')};
  width: 100vw;
  height: 100vh;
`;