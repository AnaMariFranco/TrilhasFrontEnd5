import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MinhaApp</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
