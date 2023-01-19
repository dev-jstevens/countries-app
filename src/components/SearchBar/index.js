import React from 'react';
import {
  SearchBarContainer,
  IconWrapper,
  SearchIcon,
  SearchInput
} from './SearchBarElements';

const SearchBar = ({onChange}) => {
  
  return (
    <SearchBarContainer>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchInput 
        type='search' 
        placeholder='Search for a country...' 
        onChange={onChange}  
      />
    </SearchBarContainer>
  );
};

export default SearchBar;