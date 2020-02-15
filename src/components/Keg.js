import React from 'react';
import keg from './images/keg2.png';
import KegDropDown from './KegDropDown.js';
import Count from './Count.js';

function Keg() {
const kegStyle = {

  display:"inline-block",
  padding:'30px'


}
  return (
    <div className='kegStyle'>
      <KegDropDown/>
      <img alt="keg" src={keg}></img>
        <Count count={+10}/>
    </div>
  );
}

export default Keg;
