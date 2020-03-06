import React from 'react';
import './styles.css';


const KegDropDown = (props) =>{


console.log('kegdrop',props.count);
return(

      <div className='dropDown'>
        <button className='sold'> SOLD</button>

        <div className='soldOptions'>
          <button onClick={() => props.sellPint} className='pint'>Pint Sold</button>
          <button className='soldOut'>Sold Out</button>
        </div>
      </div>
)

}

export default KegDropDown;
