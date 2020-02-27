import React, {useState} from 'react';
import './styles.css';


function KegDropDown() {
const [count, setCount] = useState(122)
  return (

      <div className='dropDown'>
        <button className='sold'>{count} SOLD</button>

        <div className='soldOptions'>
          <button onClick={()=>setCount(count - 1)} className='pint'>Pint Sold</button>
          <button className='soldOut'>Sold Out</button>
        </div>
      </div>

  );
}

export default KegDropDown;
