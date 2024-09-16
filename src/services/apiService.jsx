// consumo api
const API_KEY = 'be039efa7fc57cbe170199d1c850b137'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const BACKEND_URL = 'http://localhost:3000/'; // URL del servidor NestJS

export const fetchPopularMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data;
};

export const login = async (username, password) => {
  const response = await fetch(`${BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};
