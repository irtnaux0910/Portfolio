// Layout.jsx
// Xuan Tri Nguyen 
// 3013888576
// Duedate: Sep 26, 2024
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
        <>        
        
      <h1><img src='../src/assets/logo.png' width="70px" height="70px"></img>Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>    
         <br/>
      <hr/>
    </>
    
  );
}


