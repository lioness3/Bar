import React from 'react';
import keg from './images/keg2.png';
import KegDropDown from './KegDropDown.js';
import PropTypes from "prop-types";


function Count(props) {
const countStyle = {




}
  return (
    <div className='countStyle'>
      <button>{props.count}</button>
    </div>
  );
}
Count.propTypes = {
  count: PropTypes.number,

};
export default Count;
