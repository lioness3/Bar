import React from 'react';
import KegDropDown from './KegDropDown.js';
import Count from './Count.js';
import taps from './images/taps.png';

function Keg() {
const kegStyle = {
textAlign:'center',
margin:'5px',
background: 'rgba(0,0,0,0.3)',

color:'rgba(150,150,150,0.6)',
fontSize: '20px',
textDecoration: 'none',

}
  return (
    <div style={kegStyle}>
      <h1>BRAND</h1>
      <h2>Name of Beer</h2>
      <h3>Alcohol Content</h3>
      <h5>Type of Beer</h5>
      <img alt="keg" src={taps} style={{filter: 'drop-shadow(0px 75px 20px  black) sepia(80%) grayscale(10%) opacity(90%)'}}></img>
      <KegDropDown/>
        <Count count={10}/>
    </div>
  );
}

export default Keg;
