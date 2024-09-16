import React, { useEffect, useState } from 'react';
import { getPopularMovies, getMovieDetails, toggleFavorite, getFavorites } from '../api/movies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    const fetchFavorites = async () => {
      try {
        const data = await getFavorites();
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchMovies();
    fetchFavorites();
  }, []);

  const handleFavoriteToggle = async (movieId) => {
    try {
      await toggleFavorite(movieId);
      // Actualiza la lista de favoritos después de marcar/desmarcar
      const data = await getFavorites();
      setFavorites(data);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <button onClick={() => handleFavoriteToggle(movie.id)}>
              {favorites.includes(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
