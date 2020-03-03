import React from 'react';

import './Menu.css';


function Menu() {

  return (
    <div className='menuDropDown'>
      <button className='menuDropDownBtn'>MENU</button>
      <div className='menuContent'>
        <span>
          <ul>
            <h3>IPA</h3>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </span>
        <span>
          <ul>
            <h3>Lager</h3>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </span>
        <span>
          <ul>
            <h3>Stout</h3>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </span>
        <span>
          <ul>
            <h3>Pilsner</h3>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </span>

      </div>

    </div>
  );
}

export default Menu;
