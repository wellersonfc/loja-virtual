import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import DetalheProduto from './pages/DetalheProduto';

// Mock authentication function (replace with real logic)
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// PrivateRoute component to protect private routes
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalheproduto" element={<DetalheProduto />} />
        
        {/* Protecting the Cart route */}
        <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
