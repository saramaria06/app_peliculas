// src/components/Carousel.jsx
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/apiService';
import styles from './Carousel.module.css'; // Importar el módulo CSS

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data.slice(0, 5)); // Obtener las primeras 5 películas para el carrusel
    };
    loadMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [movies]);

  if (!movies.length) return <div>Cargando...</div>;

  return (
    <div className={styles.carouselContainer}>
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`${styles.carouselSlide} ${index === currentIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
        >
          <div className={styles.overlay}>
            <h2 className={styles.carouselTitle}>{movie.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
