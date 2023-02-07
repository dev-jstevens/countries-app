import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../ThemeContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Details from '../../components/Details';

const DetailPage = () => {
  const [country, setCountry] = useState([]);

  const { name } = useParams();

  const client = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
  });

  const { darkMode } = useContext(ThemeContext);
  console.log(`Details page: darkMode on? ${darkMode}`);

  useEffect(() => {
    client.get(`/name/${name}`).then((response) => {
      setCountry(response.data);
    });
  }, []);

  console.log(country);

  return (
    <>
      <Header />
      {
        country.map((c, i) => {
          return <Details key={i} country={c} />
        })
      }
    </>
  );
};

export default DetailPage;