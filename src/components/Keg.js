import React from 'react';
import KegDropDown from './KegDropDown.js';
import Count from './Count.js';
import coaster from './images/coaster.png';

function Keg() {
const kegStyle = {
textAlign:'center',
margin:'5px',
background: 'rgba(0,0,0,0.3)',
color:'rgba(200,200,200,.6)',
textShadow:'10px 8px 1px black',
filter:'none !importnant',
fontSize: '20px',
textDecoration: 'none',
postion:'absolute',
}
  return (
    <div style={kegStyle}>
      <h1>BRAND</h1>
      <h2>Name of Beer</h2>
      <h3>Alcohol Content</h3>
      <h5>Type of Beer</h5>
      <img alt="keg" src={coaster} style={{filter: 'drop-shadow(0px 75px 20px  black) sepia(80%) grayscale(10%) opacity(90%)', postion:'absolute', zIndex:'-100'}}></img>
      <KegDropDown/>
        <Count count={10}/>
    </div>
  );
}

export default Keg;
