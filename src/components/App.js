import React from 'react';
import Navigation from './Navigation.js';

import AgeRestriction from './AgeRestriction.js';
import KegBrandList from './KegBrandList';
import NewInventoryForm from './NewInventoryForm.js';
import { Switch, Route, Link } from 'react-router-dom';
import Error404 from './Error404';
import './App.css';


class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  masterList: [],
  count: 124
  };



this.sellPint = this.sellPint.bind(this);
  this.handleAddingNewInventoryToList = this.handleAddingNewInventoryToList.bind(this);
}
sellPint(){
  let count = this.setState({count: this.state.count - 1});
}
  handleAddingNewInventoryToList(newInventory){
  var newMasterList = this.state.masterList.slice();
  newMasterList.push(newInventory);
  this.setState({masterList: newMasterList});
}

  render(){
    console.log(this.state.count);
  return (
    <div>
      <Navigation/>
      <Switch>

      <Route  exact path='/' render={()=> <KegBrandList kegBrandList={this.state.masterList} sellPint={this.sellPint} count={this.state.count}/>} />

      <Route  path='/new' render={() =><NewInventoryForm onNewCreation={this.handleAddingNewInventoryToList} />} />

    </Switch>
    </div>
  );
}
}
export default App;
