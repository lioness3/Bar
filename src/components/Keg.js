import React from 'react';
import keg from './images/keg2.png';
import KegDropDown from './KegDropDown.js';


function Keg() {
const kegStyle = {

  display:"inline-block",
  padding:'30px'


}
  return (
    <div className='kegStyle'>
      <KegDropDown/>
      <img alt="keg" src={keg}></img>
    </div>
  );
}

export default Keg;
