import React from 'react';
import Navigation from './Navigation.js';
import Inventory from './Inventory.js';
import NewInventory from './NewInventory.js';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Navigation/>
      <Switch>
      <Route exact path='/new' component={NewInventory} />
    </Switch>
      <Inventory/>
    </div>
  );
}

export default App;
