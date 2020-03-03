import React from 'react';
import Navigation from './Navigation.js';
import Body from './Body'

import './App.css';


class App extends React.Component {


  render(){
  return (
    <div>
      <Navigation/>
      <Body/>
    </div>
  );
}
}
export default App;
