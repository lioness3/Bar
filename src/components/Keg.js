import React from 'react';
import keg from './images/keg2.png';
import './Keg.css';


function Keg() {

  return (
    <div className='kegStyle'>
      <button className='sold'></button>
      <span className='soldOptions'>
        <button className='pint'>Pint Sold</button>
        <button className='soldOut'>Sold Out</button>
      </span>
      <img alt="keg" src={keg}></img>


    </div>
  );
}

export default Keg;
