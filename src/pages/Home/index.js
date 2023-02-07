'use strict';

import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import { ThemeContext } from '../../ThemeContext';
import Header from '../../components/Header';
import CountriesContainer from '../../components/CountriesContainer';
import LoadingScreen from '../../components/LoadingScreen';
import axios from 'axios';

const HomePage = () => {
  const client = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
  });

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);
    client.get('/all').then((response) => {
      setCountries(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      {
        loading ? (
          <LoadingScreen />
        ) : (
          <CountriesContainer countries={countries} />
        )
      }
    </>
  );
};

export default HomePage;