import React from 'react';
import Keg from './Keg.js';

import KegBrandList from './KegBrandList'

function Inventory() {
  const inventoryStyle = {

display:'flex',

  }

  return (
    <div style={inventoryStyle}>
      <KegBrandList/>

    </div>
  );
}

export default Inventory;
