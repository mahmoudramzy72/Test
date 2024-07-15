// /src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { username, password });
  return response.data;
};

const register = async (userData) => {
  await axios.post(`${API_URL}/auth/register`, userData);
};

const getUserData = async (token) => {
  const response = await axios.get(`${API_URL}/auth/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { login, register, getUserData };
