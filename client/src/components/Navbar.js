import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav>
     <ul className="navbar">
      <h1><Link to="/">Secure Solutions</Link></h1>
      {/* <li><Link to="/">Home</Link></li> */}
      <li><Link to="/report">Log Report</Link></li>
     </ul>
   </nav>
  );
};

export default Navbar;