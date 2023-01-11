import React from 'react';
import {
  CountryContainer,
  CountryFlag,
  FlagImg,
  CountryInfo,
  CountryName,
  Label,
  CountryData
} from './CountryElements';

const Country = ({country}) => {
  return (
    <CountryContainer>
      <CountryFlag>
        <FlagImg src={country.flags.svg} alt={`${country.name.offical}'s flag.`}/>
      </CountryFlag>
      <CountryInfo>
        <CountryName>{country.name.common}</CountryName>
        <Label>Population</Label>
        <CountryData>{country.population}</CountryData>
        <Label>Region</Label>
        <CountryData>{country.region}</CountryData>
        <Label>Capital</Label>
        <CountryData>{country.capital}</CountryData>
      </CountryInfo>
    </CountryContainer>
  );
};

export default Country;