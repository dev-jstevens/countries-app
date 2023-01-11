'use strict';

import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import { ThemeContext } from '../../ThemeContext';
import Header from '../../components/Header';
import CountriesContainer from '../../components/CountriesContainer';
import axios from 'axios';

const HomePage = () => {
  const client = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
  });

  const [countries, setCountries] = useState([]);

  const { darkMode } = useContext(ThemeContext);
  console.log(darkMode);

  useEffect(() => {
    client.get('/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  console.log(countries);

  return (
    <>
      <Header />
      <CountriesContainer countries={countries} />
    </>
  );
};

export default HomePage;