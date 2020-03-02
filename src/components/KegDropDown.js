import React from 'react';
import './styles.css';


function KegDropDown(props) {



return(

      <div className='dropDown'>
        <button className='sold'>{props.count} SOLD</button>

        <div className='soldOptions'>
          <button onClick={() => props.sellPint()} className='pint'>Pint Sold</button>
          <button className='soldOut'>Sold Out</button>
        </div>
      </div>
)

}

export default KegDropDown;
