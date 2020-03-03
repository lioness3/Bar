import React from 'react';
import Keg from './Keg.js';

import KegBrandList from './KegBrandList';
import PropTypes from "prop-types";
import NewInventoryForm from './NewInventoryForm';
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
      currentlyVisibleContent = <NewInventoryForm />;
    } else {
   currentlyVisibleContent = <KegBrandList/>
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
