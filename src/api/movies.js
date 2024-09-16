import api from './axios';

// Obtiene la lista de películas populares
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await api.get(`/movies/popular?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

// Obtiene los detalles de una película específica
export const getMovieDetails = async (id) => {
  try {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Marca una película como favorita
export const toggleFavorite = async (movieId) => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await api.post(`/favorites/${movieId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error toggling favorite:', error);
    throw error;
  }
};

// Obtiene la lista de películas favoritas
export const getFavorites = async () => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await api.get('/favorites', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    throw error;
  }
};
