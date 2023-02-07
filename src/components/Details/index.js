import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { 
  DetailsContainer,
  Col1,
  Col2,
  Row1,
  Row2,
  BackArrow,
  BackButton,
  ButtonLink,
  FlagWrapper,
  FlagImg,
  InfoContainerOne,
  InfoSection,
  CountryTitle,
  InfoLabel,
  Info,
  InfoContainerTwo,
  BorderCountriesContainer,
  BorderLabel,
  BorderCountry,
  BorderCountryButton,
  BorderCountryLink
} from './DetailsElements';
import { ThemeContext } from '../../ThemeContext';

const Details = ({ country }) => {
  const [borderCountries, setBorderCountries] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  const client = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
  });

  useEffect(() => {
    if (country && country.borders) {
      client.get(`/alpha?codes=${country.borders.toString()}`).then((response) => {
        setBorderCountries(response.data);
      });
    }
  }, []);

  if (country === undefined) {
    return (
      <DetailsContainer>
        Loading...
      </DetailsContainer>
    )
  }

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


  const countryCurrencies = function(country) {
    const currenciesArr = [];

    if(!country.currencies) {
      return "N/A";
    } else {
      console.log(`Details currencies typeof: ${typeof country.currencies}`);
      for (const currency in country.currencies) {
        console.log(`Details currency code: ${currency}`)
        console.log(`Details currency: ${country.currencies[currency].name}`);
        currenciesArr.push(currency);
      }
    }

    for (const c of currenciesArr) {
      console.log(c);
    }
    return currenciesArr;
  };

  const countryLanguages = function(country) {
    const languagesArr = [];

    if(!country.languages) {
      return "N/A";
    } else {
      console.log(`Details langauges typeof: ${typeof country.languages}`);
      for (const language in country.languages) {
        console.log(`Details language: ${language}`)
        languagesArr.push(language);
      }
    }

    for (const l of languagesArr) {
      console.log(l);
    }
    return languagesArr;
  };

  return (
    <DetailsContainer darkMode={darkMode}>
      <Col1>
        <BackButton darkMode={darkMode}>
          <BackArrow darkMode={darkMode} />
          <ButtonLink to={'/'} darkMode={darkMode}>Back</ButtonLink>
        </BackButton>
        <FlagWrapper>
          <FlagImg src={country.flags.svg}/>
        </FlagWrapper>
      </Col1>
      <Col2>
        <Row1>
          <InfoContainerOne>
            <InfoSection>
              <CountryTitle darkMode={darkMode}>{country.name.official}</CountryTitle>
            </InfoSection>
            <InfoSection darkMode={darkMode}>
              <InfoLabel darkMode={darkMode}>Native Name:</InfoLabel>
              <Info darkMode={darkMode}>{country.name.official}</Info>
            </InfoSection>
            <InfoSection darkMode={darkMode}>
              <InfoLabel darkMode={darkMode}>Population:</InfoLabel>
              <Info darkMode={darkMode}>{formatPopulation(country.population)}</Info>
            </InfoSection>
            <InfoSection darkMode={darkMode}>
              <InfoLabel darkMode={darkMode}>Region:</InfoLabel>
              <Info darkMode={darkMode}>{country.region}</Info>
            </InfoSection>
            <InfoSection darkMode={darkMode}>
              <InfoLabel darkMode={darkMode}>Sub Region:</InfoLabel>
              <Info darkMode={darkMode}>{country.subregion}</Info>
            </InfoSection>
            <InfoSection darkMode={darkMode}>
              <InfoLabel darkMode={darkMode}>Capital:</InfoLabel>
              <Info darkMode={darkMode}>{countryCapital(country)}</Info>
            </InfoSection>
          </InfoContainerOne>
          <InfoContainerTwo>
            <InfoSection darkMode={darkMode}>
              <InfoLabel darkMode={darkMode}>Top Level Domain:</InfoLabel>
              <Info darkMode={darkMode}>
                {
                  country.tld.map(
                    (t, i, {length}) =>  t + ((i === length - 1) ? '' : ', ')
                  )
                }
              </Info>
            </InfoSection>
            <InfoSection darkMode={darkMode}>
              <InfoLabel darkMode={darkMode}>Currencies:</InfoLabel>
              <Info darkMode={darkMode}>
                {
                  (countryCurrencies(country) === "N/A") ? 
                  "N/A" :
                  (
                    countryCurrencies(country).map(
                      (c, i, {length}) => country.currencies[c].name + ((i === length - 1) ? '' : ', ')
                    )
                  )
                }
              </Info>
            </InfoSection>
            <InfoSection darkMode={darkMode}>
              <InfoLabel darkMode={darkMode}>Languages:</InfoLabel>
              <Info darkMode={darkMode}>
                {
                  (countryLanguages(country) === "N/A") ?
                  "N/A" :
                  (
                    countryLanguages(country).map(
                      (l, i, {length}) => country.languages[l] + ((i === length - 1) ? '' : ', ')
                    )
                  )
                }
              </Info>
            </InfoSection>
          </InfoContainerTwo>
        </Row1>
        <Row2>
          <BorderCountriesContainer>
            <BorderLabel darkMode={darkMode}>Border Countries:</BorderLabel>
            {
              (borderCountries.length > 0) ? (
                borderCountries.map((border, i) => {
                  return (
                    <BorderCountry key={i} darkMode={darkMode}>
                      <BorderCountryButton darkMode={darkMode}>
                        <BorderCountryLink href={`http://localhost:3000/details/${border.name.common}`} darkMode={darkMode}>{border.name.common}</BorderCountryLink>
                      </BorderCountryButton>
                    </BorderCountry>
                  )
                })
              ) : (
                <Info>{'N/A'}</Info>
              )
            }
          </BorderCountriesContainer>
        </Row2>
      </Col2>
    </DetailsContainer>
  )
};

export default Details;