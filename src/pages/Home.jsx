import React from 'react';
import cakeImage from '../assets/cake.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a HappyCake</h1>
      <h3>Lugar de los pasteles felices</h3>
      <img src={cakeImage} alt="Cake" className="cake-image" />
    </div>
  );
};

export default Home;
