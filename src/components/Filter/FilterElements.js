import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export const FilterContainer = styled.div`
  height: 56px;
  margin-left: 1.1875rem;
  margin-bottom: 1.875rem;
  border-radius: 10px;

  @media screen and (min-width: 480px) {
    display: flex;
    height: 48px;
    width: 13vw;
    min-width: 190px;
    margin: 0 4.1rem 2.5rem 5rem;
    float: right;
  }

  @media screen and (max-width: 750px) {
    margin-right: 14.5rem;
  }
`;

export const FilterButton = styled.button`
  width: 50vw;
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  border: none;
  box-shadow: ${({darkMode}) => (darkMode ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : '0px 2px 5px rgba(0, 0, 0, 0.05)')};
  border-radius: 7px;
  padding-bottom: 5px;

  @media screen and (min-width: 480px) {
    width: 13vw;
    min-width: 190px;
  }
`;

export const TextWrapper = styled.div`
  width: 47vw;

  @media screen and (min-width: 480px) {
    width: 11vw;
    margin-left: 0.5rem;
    min-width: 190px;
  }
`;

export const ButtonText = styled.h2`
  font-size: 1em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-family: 'Nunito Sans';
  font-weight: 600;
  display: inline-block;
  margin-top: 15px;
`;

export const DownChevron = styled(FaChevronDown)`
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  display: inline-block;
  margin-left: 2rem;
  font-size: 0.7rem;
`;

export const FilterMenu = styled.ul`
  list-style: none;
  width: 50vw;
  margin-top: 5px;
  padding-left: 0px;
  background: ${({darkMode}) => (darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  position: absolute;
  box-shadow: ${({darkMode}) => (darkMode ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : '0px 2px 5px rgba(0, 0, 0, 0.05)')};
  border-radius: 7px;
  display: ${({openFilterMenu}) => (openFilterMenu ? 'block' : 'none')};

  @media screen and (min-width: 480px) {
    width: 13vw;
    min-width: 190px;
    margin-top: 3.4rem;
  }
`;

export const FilterItem = styled.li`
  width: 100%;
`;

export const FilterItemButton = styled.button`
  width: 100%;
  background: ${props => props.active};
  border: none;
  border-radius: 7px;
`;

export const FilterItemText = styled.h3`
  font-size: 1em;
  color: ${({darkMode}) => (darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  font-family: 'Nunito Sans';
  font-weight: 600;
  text-align: left;
  padding-left: 0.9rem;
  margin: 5px;
`;