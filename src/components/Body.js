import React, { Component } from 'react';
import { connect } from 'react-redux';
 class Body extends Component {
   render(props){
     return(
       <div style={{padding:'100px'}}>
         <button onCLick={this.props.sellPint}>{count}</button>
       </div>
     )
   }
 }
 function mapStateToProps(state) {
   return {
     count: state.count
}
 }
 function mapDispatchToProps(dispatch) {
   return{
     sellPint:() => dispatch({type: 'SELL_PINT'})

   }

 }
export default connect(mapStateToProps, mapDispatchToProps)(Body);
