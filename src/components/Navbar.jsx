import React from 'react';


// State less functional component
// Destructing argument
const Navbar = ({totalCounter}) =>{
    
  return ( 
  
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Navbar 
    <span className="badge badge-pill badge-secondary">{totalCounter}</span> </span>
  </nav>
  );
}



export default Navbar;