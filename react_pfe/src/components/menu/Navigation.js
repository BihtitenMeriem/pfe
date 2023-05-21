import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './nav/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function Navigation() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index path="home" element={<Home/>} />
        <Route path="reports" element={<Reports/>} />
        <Route path="products" element={<Products/>} />
      </Route>
    </Routes>
  </BrowserRouter>
   
  );
}

export default Navigation;
