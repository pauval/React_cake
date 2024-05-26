import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBirthdayCake } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <FaHome /> Home
        </Link>
        <Link to="/contact" className="nav-link">
          <FaUser /> Contacto
        </Link>
      </div>
      <div className="nav-brand">
        HappyCake < FaBirthdayCake /> 
      </div>
    </nav>
  );
};

export default Navbar;
