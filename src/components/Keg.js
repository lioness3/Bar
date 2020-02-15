import React from 'react';
import KegDropDown from './KegDropDown.js';
import Count from './Count.js';
import taps from './images/taps.png';

function Keg() {
const kegStyle = {


}
  return (
    <div className='kegStyle'>
      <KegDropDown/>
      <h1>BRAND</h1>
      <h2>Name of Beer</h2>
      <h3>Alcohol Content</h3>
      <h5>Type of Beer</h5>
      <img alt="keg" src={taps}></img>
        <Count count={10}/>
    </div>
  );
}

export default Keg;
