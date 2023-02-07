import styled from "styled-components";

export const LoadingBg = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({darkMode}) => (darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)')};
`;

export const LoadingTextWrapper = styled.div`
  margin: 0px;
  width: 100vw;
  padding-top: calc((50vh - 2rem) / 2);
  padding-left: calc(50vw - 4rem);
`;

export const LoadingText = styled.h2`
  font-size: 2rem;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  margin: 0px;
`;