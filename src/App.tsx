import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductsPage from './components/ProductsPage';
import Navbar from './components/NavBar';
import CartPage from './components/CartPage';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </>
        
  );
};

export default App;