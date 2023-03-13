import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const DetailsContainer = styled.main`
  background: ${({darkMode}) => (darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)')};

  @media screen and (min-width: 875px) {
    display: flex;
  }
`;

export const Col1 = styled.div`
  @media screen and (min-width: 875px) {
    width: 50vw;
    height: 93vh;
    display: inline-block;
  }
`;

export const Col2 = styled.div`
  @media screen and (min-width: 875px) {
    width: 50vw;
    height: 93vh;
    display: inline-block;
    padding-top: 12rem;
  }
`;

export const Row1 = styled.div`
  @media screen and (min-width: 875px) {
    display: flex;
  }
`;

export const Row2 = styled.div`
  @media screen and (min-width: 875px) {
    margin-bottom: 3.8rem;
  }
`;

export const BackButton = styled.button`
  width: 30vw;
  height: 5vh;
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;

  @media screen and (min-width: 875px) {
    margin-top: 3.8rem;
    margin-left: 3.8rem;
    margin-bottom: 0px;
    min-width: 7.5rem;
    max-width: 7.5rem;
  }
`;

export const BackArrow = styled(BsArrowLeft)`
  font-size: 1.3em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  margin-right: 10px;
  display: inline-block;
`;

export const ButtonLink = styled(Link)`
  font-size: 1em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  text-decoration: none;
  font-family: 'Nunito Sans';
  font-weight: 300;
  display: inline-block;

  @media screen and (min-width: 875px) {
    margin-right: 0.5rem;
  }
`;

export const FlagWrapper = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  width: 85vw;
  height: 25vh;

  @media screen and (min-width: 875px) {
    width: 38vw;
    height: 40vh;
    margin-top: 3.8rem;
    margin-left: 3.8rem;
  }
`;

export const FlagImg = styled.img`
  margin: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const InfoContainerOne = styled.ul`
  margin-top: 20px;
  width: 85vw;
  height: 25vh;
  list-style: none;

  @media screen and (min-width: 875px) {
    width: 25vw;
    padding-left: 0px;
    display: inline-block;
  }
`;

export const InfoSection = styled.li`
  width: 100%;
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 875px) {
    width: 20vw;
    margin-bottom: 0.2rem;
  }
`;

export const CountryTitle = styled.h2`
  font-size: 1.5em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-family: 'Nunito Sans';
  font-weight: 800;

  @media screen and (min-width: 875px) {
    width: 25vw;
  }
`;

export const InfoLabel = styled.h3`
  font-size: 1em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-family: 'Nunito Sans';
  font-weight: 600;
  display: inline-block;
  margin-top: 0px;
  margin:-left: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  padding: 0px;
`;

export const Info = styled.h3`
  font-size: 1em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-family: 'Nunito Sans';
  font-weight: 300;
  display: inline-block;
  margin-top: 0px;
  margin:-left: 0px;
  margin-bottom: 0px;
  padding: 0px;
`;

export const InfoContainerTwo = styled.ul`
  margin-top: 20px;
  width: 85vw;
  height: 10vh;
  list-style: none;

  @media screen and (min-width: 875px) {
    width: 20vw;
    padding-left: 0px;
    display: inline-block;
    padding-top: 4.5rem;
    padding-left: 3rem;
  }
`;

export const BorderCountriesContainer = styled.ul`
  width: 85vw;
  list-style: none;
  padding-bottom: 10px;
  margin-bottom: 0px;

  @media screen and (min-width: 875px) {
    width: 45vw;
    padding-left: 0px;
    margin-top: 1.7rem;
  }
`;

export const BorderLabel = styled.h3`
  font-size: 1em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-family: 'Nunito Sans';
  font-weight: 600;
  margin-top: 0px;
  margin:-left: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  padding: 0px;

  @media screen and (min-width: 875px) {
    display: inline-block;
  }
`;

export const BorderCountry = styled.li`
  display: inline-block;
  margin-top: 5px;
  margin-right: 5px;
  background: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const BorderCountryButton = styled.button`
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  border: 1px solid;
  border-color: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  text-decoration: none;
`;

export const BorderCountryLink = styled(Link)`
  font-size: 0.8em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-family: 'Nunito Sans';
  font-weight: 300;
  text-decoration: none;
`;