import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import Menu from './Menu.js';


function Navigation() {
  const Nav_bar = {
    position:'absolute',

    height:'100px',
    width:'100%',
    display:'grid',
    gridTemplateColumns:'100px auto auto auto',
    justifyContent: 'space-between',

  }
  const newInventoryStyle = {
    padding:'20px',
  }
  const editInventoryStyle = {
    padding:'20px'
  }
  return (
    <div style={Nav_bar}>
      <Logo/>
      <Link to="/new" style={newInventoryStyle}>ADD</Link>
      <Link to="/edit" style={editInventoryStyle}>EDIT</Link>
    </div>
  );
}

export default Navigation;
