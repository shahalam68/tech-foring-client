import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: !!localStorage.getItem('siteToken'),
    accessToken: localStorage.getItem('siteToken') || ''
  });
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('siteToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setAuth({ isLoggedIn: true, accessToken: token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://tech-foring-test-server.vercel.app/login', { email, password }, { withCredentials: true });
      console.log('Login response:', response);
      if (response.data.Login) {
        const token = response.data.accessToken;
        if (token) {
          localStorage.setItem('siteToken', token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          setAuth({ isLoggedIn: true, accessToken: token });
          setUser(response.data.user); // Save user data
          navigate('/');
        }
      } else {
        throw new Error(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('siteToken'); // Remove the token from local storage
    setAuth({ isLoggedIn: false, accessToken: '' }); // Update the auth state
    axios.defaults.headers.common['Authorization'] = ''; // Clear the authorization header
    navigate('/login'); // Navigate to the login page
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
