import React from 'react';
import cakeImage from '../assets/cake.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a HappyCake</h1>
      <h4>Lugar de los pasteles felices</h4>
      <img src={cakeImage} alt="Cake" className="cake-image" />
    </div>
  );
};

export default Home;
