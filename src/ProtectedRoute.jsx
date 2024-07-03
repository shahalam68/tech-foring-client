// src/components/ProtectedRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
// import { AuthContext } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return auth.isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
