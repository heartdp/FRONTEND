import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import ProductCatalog from './components/ProductCatalog';
import OrderAndRequest from './components/OrderAndRequest';
import Sales from './components/Sales';
import MensLeatherShoes from './components/MensLeatherShoes'; // Men's Leather Shoes Page
import WomensLeatherShoes from './components/WomensLeatherShoes'; // Women's Leather Shoes Page
import BoysLeatherShoes from './components/BoysLeatherShoes'; // Boys' Leather Shoes Page
import GirlsLeatherShoes from './components/GirlsLeatherShoes'; // Girls' Leather Shoes Page

function App() {
  return (
    <Router>
      {/* Navigation Bar Component */}
      <NavBar />

      {/* Application Routes */}
      <Routes>
        {/* Main Routes */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ProductCatalog" element={<ProductCatalog />} />
        <Route path="/OrderAndRequest" element={<OrderAndRequest />} />
        <Route path="/Sales" element={<Sales />} />

        {/* Product Routes */}
        <Route path="/mens-leather-shoes" element={<MensLeatherShoes />} />
        <Route path="/womens-leather-shoes" element={<WomensLeatherShoes />} />
        <Route path="/boys-leather-shoes" element={<BoysLeatherShoes />} />
        <Route path="/girls-leather-shoes" element={<GirlsLeatherShoes />} />
      </Routes>
    </Router>
  );
}

export default App;
