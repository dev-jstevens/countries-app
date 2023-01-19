import React from 'react';
import {
  CountryContainer,
  CountryFlag,
  FlagImg,
  CountryInfo,
  CountryName,
  Label,
  CountryData,
  InforWrapper
} from './CountryElements';

const Country = ({country}) => {
  const countryCapital = function(country) {
    if (!country.capital) {
      return "N/A";
    } else {
      if (!country.capital[0]) {
        return "N/A";
      }
    }

    return country.capital[0];
  }

  return (
    <CountryContainer>
      <CountryFlag>
        <FlagImg src={country.flags.svg} alt={`${country.name.offical}'s flag.`}/>
      </CountryFlag>
      <CountryInfo>
        <CountryName>{country.name.common}</CountryName>
        <InforWrapper>
          <Label>Population</Label>
          <CountryData>{country.population}</CountryData>
        </InforWrapper>
        <InforWrapper>
          <Label>Region</Label>
          <CountryData>{country.region}</CountryData>
        </InforWrapper>
        <InforWrapper>
          <Label>Capital</Label>
          <CountryData>{countryCapital(country)}</CountryData>
        </InforWrapper>
      </CountryInfo>
    </CountryContainer>
  );
};

export default Country;