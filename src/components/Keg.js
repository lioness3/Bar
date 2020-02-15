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
      <img alt="keg" src={taps}></img>
        <Count count={10}/>
    </div>
  );
}

export default Keg;
