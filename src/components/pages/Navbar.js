import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar=()=> {
  return (
    <nav className="nav-bar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register"></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
