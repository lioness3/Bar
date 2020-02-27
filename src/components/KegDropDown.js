import React from 'react';
import './styles.css';


class KegDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 124
    };
this.sellPint = this.sellPint.bind(this);
}
 sellPint(){
  let count;
  this.setState({count: count -1});
}

render(){


return(

      <div className='dropDown'>
        <button className='sold'>{this.state.count} SOLD</button>

        <div className='soldOptions'>
          <button onClick={this.sellPint()} className='pint'>Pint Sold</button>
          <button className='soldOut'>Sold Out</button>
        </div>
      </div>
)
  };
}

export default KegDropDown;
