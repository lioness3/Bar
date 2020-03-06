import React from 'react';
import Keg from "./Keg.js";
import './styles.css';
import PropTypes from 'prop-types';

function KegBrandList(props){

// let toggle = 'beer'
// if (props.kegBrandList.length >= 1){
//   toggle = 'beer'
// }

  return (
    <div>
  
    <div className='beer'>
    {props.kegBrandList.map((keg) =>
      <Keg {...props}brand={keg.brand}
        alcoholContent={keg.alcoholContent}
        typeBeer={keg.typeBeer}
        beerName={keg.beerName}
        price={keg.price}
        key={keg.id}/>
    )}
    </div>
    </div>
  );
}
KegBrandList.propTypes = {
  kegBrandList: PropTypes.array
};
export default KegBrandList;
