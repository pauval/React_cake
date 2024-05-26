import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Cuéntanos en qué te podemos ayudar</h1>
      <form className="contact-form">
        <label>
          Correo:
          <input type="email" />
        </label>
        <label>
          Descripción:
          <textarea />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
