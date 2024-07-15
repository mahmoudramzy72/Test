// /src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      AuthService.getUserData(token).then(setUser);
    }
  }, []);

  const login = async (username, password) => {
    const data = await AuthService.login(username, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const register = async (userData) => {
    await AuthService.register(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
