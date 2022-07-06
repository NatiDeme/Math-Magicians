import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';

const NavBar = () => (
  <div className="nav-bar">
    <h1>Math Magician</h1>
    <ul className="nav-items">
      <li><Link to="/" className="item">Home</Link></li>
      <li><Link to="/calculator" className="item">Calculator</Link></li>
      <li><Link to="/quote" className="item">Quote</Link></li>
    </ul>
  </div>
);

export default NavBar;
