import React from 'react';
import logo from './images/beer1.jpg';
import { Link } from 'react-router-dom';


function Logo() {
  const logoStyle={
maxHeight:'100px',
maxWidth:'100px',
padding:'10px'
  }
  return (
    <div>
      <img style={logoStyle} alt='logo' src={logo}></img>

    </div>
  );
}

export default Logo;
