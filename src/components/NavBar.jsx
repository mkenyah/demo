import React from 'react';
import { Link } from 'react-router-dom';

import "./CSS/NavBar.css";

const NavBar = () => {
  return (
    <div className='container'>
    <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to = "/services">services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  )
}

export default NavBar;