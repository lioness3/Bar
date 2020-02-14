import React from 'react';
import './KegDropDown.css';


function KegDropDown() {

  return (

      <div className='dropDown'>
        <button className='sold'>SOLD</button>

        <div className='soldOptions'>
          <button className='pint'>Pint Sold</button>
          <button className='soldOut'>Sold Out</button>
        </div>
      </div>

  );
}

export default KegDropDown;
