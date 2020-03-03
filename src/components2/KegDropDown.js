import React, {useState} from 'react';
import './styles.css';


function KegDropDown(props) {
const sellPint=()=>{
  const action={
    type: 'SELL_PINT'
  }
}
  return (

      <div className='dropDown'>
        <button className='sold'>{count} SOLD</button>

        <div className='soldOptions'>
          <button onClick={()=>sellPint(props.count)} className='pint'>Pint Sold</button>
          <button className='soldOut'>Sold Out</button>
        </div>
      </div>

  );
}

export default KegDropDown;
