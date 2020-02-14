import React from 'react';
import Navigation from './Navigation.js';
import Inventory from './Inventory.js';
import NewInventoryForm from './NewInventoryForm.js';
import { Switch, Route, Link } from 'react-router-dom';
import Error404 from './Error404';
import './App.css';

function App() {
  return (
    <div>
      <Navigation/>

      <Switch>
        <Route exact path='/' component={Inventory} />
      <Route exact path='/new' component={NewInventoryForm} />
      <Route component={Error404} />
    </Switch>
    </div>
  );
}

export default App;
