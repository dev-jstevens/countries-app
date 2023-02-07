import React, {useContext} from 'react';
import {
  CountryContainer,
  DetailsLink,
  CountryFlag,
  FlagImg,
  CountryInfo,
  CountryName,
  Label,
  CountryData,
  InfoWrapper
} from './CountryElements';
import { ThemeContext } from '../../ThemeContext';

const Country = ({country}) => {
  const { darkMode } = useContext(ThemeContext);

  const formatPopulation = function(population) {
    const popStr = population.toString();
    const populationArr = [];

    for (let i = popStr.length - 1; i >= 0; i--) {
      if (i === popStr.length - 1) {
        populationArr.push(popStr[i]);
      } else if ((i !== 0) && (i % 3 === 0)) {
        populationArr.unshift(popStr[i]);
        populationArr.unshift(",");
      } else {
        populationArr.unshift(popStr[i]);
      }
    }

    return populationArr.join('').toString();
  }

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
    <CountryContainer darkMode={darkMode}>
      <DetailsLink to={`details/${country.name.official}`} darkMode={darkMode}>
        <CountryFlag darkMode={darkMode}>
          <FlagImg src={country.flags.svg} alt={`${country.name.offical}'s flag.`}/>
        </CountryFlag>
        <CountryInfo darkMode={darkMode}>
          <CountryName darkMode={darkMode}>{country.name.common}</CountryName>
          <InfoWrapper>
            <Label darkMode={darkMode}>Population:</Label>
            <CountryData darkMode={darkMode}>{formatPopulation(country.population)}</CountryData>
          </InfoWrapper>
          <InfoWrapper>
            <Label darkMode={darkMode}>Region:</Label>
            <CountryData darkMode={darkMode}>{country.region}</CountryData>
          </InfoWrapper>
          <InfoWrapper>
            <Label darkMode={darkMode}>Capital:</Label>
            <CountryData darkMode={darkMode}>{countryCapital(country)}</CountryData>
          </InfoWrapper>
        </CountryInfo>
      </DetailsLink>
    </CountryContainer>
  );
};

export default Country;