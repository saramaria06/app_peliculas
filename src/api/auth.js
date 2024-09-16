import api from './axios';

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    // Guarda el token en el localStorage o en un estado global
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('access_token');
};
