// src/components/MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/apiService';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Cargando...</div>;

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>{movie.title}</h1>
      <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p className={styles.info}>Fecha de Estreno: {movie.release_date}</p>
      <p className={styles.info}>Géneros: {movie.genres.map((genre) => genre.name).join(', ')}</p>
      <p className={styles.info}>Rating: {movie.vote_average}</p>
      <p className={styles.overview}>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;