import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import Menu from './Menu.js';


function Navigation() {
  const Nav_bar = {
    padding:' 20px',
    height:'100px',
    width:'100%',
    display:'grid',
    gridTemplateColumns:'100px auto auto auto',
    justifyContent: 'space-around',
    alignContent:'center',
    background: 'rgba(0,0,0,0.8)',
    position:'relative',
      zIndex: '300',
  }
  const newInventoryStyle = {

    fontFamily:'system-ui',
    textDecoration:'none',
    fontSize: '60px',
    color:'white',
  }
  const editInventoryStyle = {
fontFamily:'system-ui',
    textDecoration:'none',
    fontSize: '60px',
    color:'white',
  }
  return (
    <div style={Nav_bar}>
      <Logo/>
      <Link to="/new" style={newInventoryStyle}>ADD</Link>
      <Link to="/edit" style={editInventoryStyle}>EDIT</Link>
      <Menu/>
    </div>
  );
}

export default Navigation;
