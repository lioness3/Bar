import React from 'react';
import Keg from './Keg.js';

function Inventory() {
  const inventoryStyle = {

    border:'3px solid blue',
    postion:'absolute',
    top:'300px',
    height:'500px',
    display:'flex',
    padding:'50px',
    
  }

  return (
    <div style={inventoryStyle}>
      <Keg/>
    </div>
  );
}

export default Inventory;
