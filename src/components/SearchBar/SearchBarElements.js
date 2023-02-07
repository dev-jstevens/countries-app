import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';

export const SearchBarContainer = styled.div`
  width: 90%;
  height: 3rem;
  margin-left: 1.1875rem;
  margin-bottom: 1.875rem;
  border-radius: 7px;
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  box-shadow: ${({darkMode}) => (darkMode ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : '0px 2px 5px rgba(0, 0, 0, 0.05)')};

  @media screen and (min-width: 480px) {
    width: 32.5vw;
    min-width: 315px;
    margin: 0 0 2.5rem 5rem;
    display: inline-block;
  }
`;

export const IconWrapper = styled.button`
  border: none;
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  margin-left: 1.25rem;
  margin-top: 0.75rem;
  display: inline-block;
  float: left;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)')};
`;

export const SearchIcon = styled(IoMdSearch)`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)')};
  font-size: 1.3rem;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 0.9rem;
  margin-top: 0.8125rem;
  margin-left: 1rem;
  display: inline-block;
  float: left;
  font-family: 'Nunito Sans';
  font-weight: 300;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)')};

  @media screen and (min-width: 480px) {
    margin-top: 0.75rem;
    margin-left: 1rem;
    font-size: 1rem;
  }

  &::placeholder {
    color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)')};
  }
`;