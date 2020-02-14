import React from 'react';
import keg from './images/keg2.png'


function Keg() {
  const kegStyle = {
display:"inline",
padding:'30px',

  }
  return (
    <div style={kegStyle}>
      <img alt="keg" src={keg}></img>
      <img alt="keg" src={keg}></img>
      <img alt="keg" src={keg}></img>
      <img alt="keg" src={keg}></img>
      <img alt="keg" src={keg}></img>
      <img alt="keg" src={keg}></img>

    </div>
  );
}

export default Keg;
