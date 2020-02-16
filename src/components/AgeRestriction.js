import React from 'react';
import './AgeRestriction.css';
import { Link } from 'react-router-dom';


function AgeRestriction() {


  return (
  <div style={{margin:'500px', textAlign:'center'}}>
    <div className='ageRestrictionStyle'>
      <h1>ARE YOU 21+?</h1>
      <div className='yesOrNoLinks'>
        <Link to='/inventory'> 😁 </Link>
        <Link to='/'> 😩 </Link>
      </div>
    </div>
  </div>
  );
}

export default AgeRestriction;
