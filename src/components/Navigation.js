import React from 'react';
import { Link } from 'react-router-dom'


function Navigation() {
  const Nav_bar = {
    position:'absolute',
    height:'100px',
    backgroundColor:'black',
    width:'100%',
  }
  const newInventoryStyle = {
    padding:'50px'
  }
  return (
    <div style={Nav_bar}>
      <Link to="/new" style={newInventoryStyle}>ADD</Link>
    </div>
  );
}

export default Navigation;
