import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryContainer = styled.li`
  width: 16em;
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  box-shadow: ${({darkMode}) => (darkMode ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : '0px 2px 5px rgba(0, 0, 0, 0.05)')};
  margin-top: 2px;
  margin-bottom: 3.75rem;
  margin-left: 3.75rem;
  border-radius: 7px;

  @media screen and (min-width: 480px) {
    display: inline-block;
    width: 18vw;
    min-width: 260px;
    max-width: 260px;
    margin-left: 5.2rem;
  }
`;

export const DetailsLink = styled(Link)`
  width: 16em;
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  border-radius: 7px;
  text-decoration: none;

  @media screen and (min-width: 480px) {
    width: 18vw;
    min-width: 260px;
    max-width: 260px;
  }
`;

export const CountryFlag = styled.div`
  width: 16em;
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  margin: 0px;
  padding: 0px;
  border-radius: 7px 7px 0 0;

  @media screen and (min-width: 480px) {
    width: 18vw;
    min-width: 260px;
    max-width: 260px;
    height: 9.375rem;
  }
`;

export const FlagImg = styled.img`
  width: 16em;
  margin: 0px;
  border-radius: 7px 7px 0 0;
  object-fit: cover;

  @media screen and (min-width: 480px) {
    width: 18vw;
    min-width: 260px;
    max-width: 260px;
    height: 100%;
  }
`;

export const CountryName = styled.h2`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-size: 1.3em;
  font-weight: 800;
  font-family: 'Nunito Sans';
  margin-bottom: 0.8rem;
  margin-top: 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 1.4em;

  @media screen and (min-width: 480px) {
    width: 13rem;
    margin-top: 0.9375rem;
    margin-left: 1.875rem;
  }
`;

export const CountryInfo = styled.div`
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  border-radius: 0 0 7px 7px;
  padding: 1.25rem 1.25rem 1.875rem 1.25rem;

  @media screen and (min-width: 480px) {
    width: 16em;
    height: 9.375rem;
    padding: 0 0 0 0;
  }
`;

export const InfoWrapper = styled.div`
  width: 16em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 480px) {
    margin-bottom: 0.3rem;
    width: 13em;
    margin-left: 1.875rem;
  }
`;

export const Label = styled.h3`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-size: 1em;
  font-weight: 600;
  font-family: 'Nunito Sans';
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const CountryData = styled.p`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-size: 1em;
  font-weight: 300;
  font-family: 'Nunito Sans';
  display: inline-block;
  margin-left: 7px;
  margin-top: 0px;
  margin-bottom: 0px;
`;