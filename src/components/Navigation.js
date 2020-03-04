import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import Menu from './Menu.js';
import './styles.css';


function Navigation() {
  const Nav_bar = {
    padding:' 20px',
    height:'100px',
    width:'100vw',
    display:'grid',
    gridTemplateColumns:'100px auto auto auto',
    justifyContent: 'space-around',
    alignContent:'center',
    background: 'rgba(0,0,0,0.8)',
    position:'relative',
      zIndex: '300',
  }
  const newInventoryStyle = {

    fontFamily:"'Roboto Slab', serif ",
    textDecoration:'none',
    fontSize: '60px',
    color:'rgba(215,240,243,0.7)',

  }
  const editInventoryStyle = {
fontFamily:"'Roboto Slab', serif ",
    textDecoration:'none',
    fontSize: '60px',
    color:'rgba(215,240,243,0.7)'
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
