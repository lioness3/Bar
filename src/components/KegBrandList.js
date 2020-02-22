import React from 'react';
import Keg from "./Keg.js";
import './KegBrandList.css';
import PropTypes from 'prop-types';
var masterKegBrandList = [
  {
    brand: 'Budweiser',
    alcoholContent: 5,
    price: 100,
    type:'lager',
    name:'Budweiser'
  },
  {
    brand: 'Blue Moon Brewing Co',
    alcoholContent: 5.4,
    price: 239,
    type:'Witbeir',
    name:'Blue Moon'

  },
  {
    brand: 'Samuel Adams',
    alcoholContent: 5,
    price: 245,
    type:'Lager',
    name:'Boston Lager'
  },
  {
    brand: 'Budweiser',
    alcoholContent: 5,
    price: 100,
    type:'lager',
    name:'Budweiser'
  },
  {
    brand: 'Blue Moon Brewing Co',
    alcoholContent: 5.4,
    price: 239,
    type:'Witbeir',
    name:'Blue Moon'

  },
  {
    brand: 'Samuel Adams',
    alcoholContent: 5,
    price: 245,
    type:'Lager',
    name:'Boston Lager'
  },
  {
    brand: 'Budweiser',
    alcoholContent: 5,
    price: 100,
    type:'lager',
    name:'Budweiser'
  },
  {
    brand: 'Blue Moon Brewing Co',
    alcoholContent: 5.4,
    price: 239,
    type:'Witbeir',
    name:'Blue Moon'

  },
  {
    brand: 'Samuel Adams',
    alcoholContent: 5,
    price: 245,
    type:'Lager',
    name:'Boston Lager'
  }


];

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
