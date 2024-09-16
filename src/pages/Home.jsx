// src/pages/Home.jsx
import React from 'react';
import MovieList from '../componenets/MovieList'; // Si el archivo es .jsx
import Carousel from '../componenets/Crousel';
import Auth from '../componenets/Auth';

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Auth />
      <MovieList />
    </div>
  );
};

export default Home;
