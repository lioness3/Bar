import React from 'react';
import Navigation from './Navigation.js';
import Inventory from './Inventory.js';
import AgeRestriction from './AgeRestriction.js';
import NewInventoryForm from './NewInventoryForm.js';
import { Switch, Route, Link } from 'react-router-dom';
import Error404 from './Error404';
import './App.css';


class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  masterList: []
  };

  this.handleAddingNewInventoryToList = this.handleAddingNewInventoryToList.bind(this);

  handleAddingNewInventoryToList(newInventory){
  var newMasterList = this.state.masterList.slice();
  newMasterList.push(newInventory);
  this.setState({masterList: newMasterList});
}
  render(){
  return (
    <div>
      <Navigation/>
      <Switch>
      <Route exact path='/' component={AgeRestriction} />
      <Route  path='/inventory' component={Inventory} />
      <Route  path='/new' component={NewInventoryForm} />
      <Route component={Error404} />
    </Switch>
    </div>
  );
}
}
export default App;
