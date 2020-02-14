import React from 'react';
import './DropDown.css';


function DropDown() {

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

export default DropDown;
