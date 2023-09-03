// src/navbar/index.js
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#">Home</a>
      <a href="#">Month View</a>
      <a href="#">Week View</a>
      <a href="#">Day View</a>
      {/* Add more navigation links as needed */}
    </nav>
  );
};

export default Navbar;