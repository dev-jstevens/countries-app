import React from 'react';
import { Container, CountriesList } from './CountriesContainerElements';
import Country from '../Country';

const CountriesContainer = ({countries}) => {
  console.log(`inside CountriesContainer ${countries}`);
  return (
    <Container>
      <CountriesList>
        {
          countries.map((country, i) => {
            return <Country key={i} country={country} />
          })
        }
      </CountriesList>
    </Container>
  );
};

export default CountriesContainer;