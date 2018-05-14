import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav>
     <ul className="navbar">
      <span>
        <h1 className="navbar-logo"><Link to="/">Secure Solutions</Link></h1>
        <h2 className="navbar-tagline">Peace of mind, whether you're at home or away</h2>
      </span>
      <span className="navbar-span">
        <li><Link className="navbar-link" to="/">Home</Link></li>
        <li><Link className="navbar-link" to="/report">Log Report</Link></li>
      </span>
     </ul>
   </nav>
  );
};

export default Navbar;