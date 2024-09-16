// src/components/MovieList.jsx
import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../services/apiService';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopularMovies(page);
      setMovies((prevMovies) => [...prevMovies, ...data]);
    };
    fetchMovies();
  }, [page]);

  return (
    <div className={styles.movieListContainer}>
      <h1>Películas Populares</h1>
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className={styles.movieImage}
            />
            <div className={styles.movieInfo}>
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <p className={styles.movieDescription}>{movie.overview.substring(0, 100)}...</p>
              <Link to={`/movie/${movie.id}`} className={styles.movieLink}>
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.loadMoreButton} onClick={() => setPage((prev) => prev + 1)}>
        Cargar Más
      </button>
    </div>
  );
};

export default MovieList;