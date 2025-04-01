import React from 'react';
import './styles/contaform.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Seu Nome" />
      <input type="email" placeholder="Seu Email" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
