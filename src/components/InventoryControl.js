import React from 'react';
import Keg from './Keg.js';

import KegBrandList from './KegBrandList';
import PropTypes from "prop-types";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };

    this.handleInventoryDisplay = this.handleInventoryDisplay.bind(this);
  }

  handleInventoryDisplay(){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleContent = null;

    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewInventoryForm onNewCreation={this.props.onNewCreation}/>;
    } else {
      currentlyVisibleContent = <KegBrandList    kegBrandList={this.handleInventoryDisplay}/>;
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}
InventoryControl.propTypes = {
  onNewCreation: PropTypes.func
};
export default InventoryControl;
class  Inventory() {
  const inventoryStyle = {

display:'flex',

  }

  return (
    <div style={inventoryStyle}>
      <KegBrandList/>

    </div>
  );
}

export default Inventory;
