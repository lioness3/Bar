import React from 'react';
import logo from './images/beer1.jpg';
import { Link } from 'react-router-dom';
import './Tooltip.css';
import mug from './images/mug.png';


function Logo() {
  const logoStyle={
maxHeight:'100px',
maxWidth:'100px',
padding:'10px'
  }




  return (
    <div>
      <div className="tooltip">Hover over me
  <span className="tooltiptext">Tooltip text</span>
  </div>

      <img style={logoStyle} alt='logo' src={logo}></img>
      <span className='glass' > Glass</span>
        <img  alt='logo' src={mug}></img>
    </div>
  );
}

export default Logo;
// <script>${('.glass').circleType({radius: 800})}</script>
