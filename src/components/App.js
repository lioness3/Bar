import React from 'react';
import Navigation from './Navigation.js';
import Inventory from './Inventory.js';
import AgeRestriction from './AgeRestriction.js';
import NewInventoryForm from './NewInventoryForm.js';
import KegBrandList from './KegBrandList';
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
}
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

      <Route  exact path='/' render={()=> <KegBrandList kegBrandList={this.state.masterList}/>} />

      <Route  path='/new' render={()=><NewInventoryForm onNewCreation={this.handleAddingNewInventoryToList} />} />

    </Switch>
    </div>
  );
}
}
export default App;
