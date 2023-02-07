import React, { useContext } from 'react';
import {
  SearchBarContainer,
  IconWrapper,
  SearchIcon,
  SearchInput
} from './SearchBarElements';
import { ThemeContext } from '../../ThemeContext';

const SearchBar = ({onChange}) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <SearchBarContainer darkMode={darkMode}>
      <IconWrapper darkMode={darkMode}>
        <SearchIcon darkMode={darkMode}/>
      </IconWrapper>
      <SearchInput 
        type='search' 
        placeholder='Search for a country...' 
        onChange={onChange}
        darkMode={darkMode}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;