import React from 'react';
import Keg from './Keg.js';

function Inventory() {
  const inventoryStyle = {

    border:'3px solid black',
    postion:'absolute',
    zIndex:'-3',
    top:'500px',
    height:'1000px',
    display:'flex',
    overflowX:'scroll',
    padding:'40px',

  }

  return (
    <div style={inventoryStyle}>
      <Keg/>
      <Keg/>
      <Keg/>
      <Keg/>
      <Keg/>
      <Keg/>
      <Keg/>
      <Keg/>

    </div>
  );
}

export default Inventory;
