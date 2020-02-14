import React from 'react';
import keg from './images/keg2.png';
import './Keg.css';


function Keg() {

  return (
    <div className='kegStyle'>
      <div className='dropDown'>
      <button className='sold'>SOLD</button>
      <div className='soldOptions'>
        <button className='pint'>Pint Sold</button>
        <button className='soldOut'>Sold Out</button>
      </div>
      </div>
      <img alt="keg" src={keg}></img>


    </div>
  );
}

export default Keg;
