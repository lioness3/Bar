import React from 'react';
import logo from './images/beer1.jpg';
import { Link } from 'react-router-dom';
import './Logo.css';
import mug from './images/mug.png';


function Logo() {
  const logoStyle={
maxHeight:'100px',
maxWidth:'100px',
padding:'10px'
  }





  return (
    <div>
      <div className="tooltip"><Link to='/' className='glass'> Glass</Link>
  <span className="tooltiptext">HOME</span>
  </div>



    </div>
  );
}

export default Logo;
// <img  alt='logo' src={mug}></img>
// <script>${('.glass').circleType({radius: 800})}</script>
