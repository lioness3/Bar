import React from 'react';
import Keg from "./Keg.js";
import './KegBrandList.css';
import PropTypes from 'prop-types';

function KegBrandList(props){


  return (
    <div className='beer'>


    {props.kegBrandList.map((keg) =>
      <Keg brand={keg.brand}
        alcoholContent={keg.alcoholContent}
        typeBeer={keg.typeBeer}
        beerName={keg.beerName}
        price={keg.price}
        key={keg.id}/>
    )}
    </div>
  );
}
KegBrandList.propTypes = {
  kegBrandList: PropTypes.array
};
export default KegBrandList;
