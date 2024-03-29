import React, { useState, useContext } from 'react';
import { Container, CountriesList, ControlContainer } from './CountriesContainerElements';
import Country from '../Country';
import Filter from '../Filter';
import SearchBar from '../SearchBar';
import { ThemeContext } from '../../ThemeContext';

const CountriesContainer = ({countries}) => {
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState('all');
  const { darkMode } = useContext(ThemeContext);

  const FILTER_MAP = {
    all: (country) => country.region,
    africa: (country) => country.region === 'Africa',
    americas: (country) => country.region === 'Americas',
    asia: (country) => country.region === 'Asia',
    europe: (country) => country.region === 'Europe',
    oceania: (country) => country.region === 'Oceania'
  };

  return (
    <Container darkMode={darkMode}>
      <ControlContainer>
        <SearchBar onChange={(e) => {
          setInputValue(e.target.value);
        }} />
        <Filter handler={filter => setActiveFilter(filter)} activeFilter={activeFilter} />
      </ControlContainer>
      <CountriesList darkMode={darkMode}>
        {
          countries?.filter(
            (e) =>
            e.name.common.toLowerCase().includes(inputValue.toLowerCase())
          ).filter(FILTER_MAP[activeFilter]).map((country, i) => {
            return <Country key={i} country={country} />
          })
        }
      </CountriesList>
    </Container>
  );
};

export default CountriesContainer;