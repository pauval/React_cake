import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <FaHome /> Home
      </Link>
      <Link to="/contact" className="nav-link">
        <FaUser /> Contacto
      </Link>
    </nav>
  );
};

export default Navbar;
