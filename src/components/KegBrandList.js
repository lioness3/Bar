import React from 'react';
import Keg from "./Keg.js";

var masterKegBrandList = [
  {
    brand: 'Budweiser',
    alcoholContent: '5',
    price: '100',
    type:'lager'
    name:'Budweiser'
  },
  {
    brand: 'Blue Moon Brewing Co',
    alcoholContent: '5.4',
    price: '239'
    type:'Witbeir'
    name:'Blue Moon'

  },
  {
    brand: 'Samuel Adams',
    alcoholContent: '5',
    price: '245'
    type:'Lager'
    name:'Boston Lager'
  }
];

function KegBrandList(){


  return (
    <div>

    {masterKegBrandList.map((keg, index) =>
      <Keg brand={keg.brand}
        alcoholContent={keg.alcoholContent}
        price={keg.price}
        type={keg.type}
        name={keg.name}
        key={index}/>
    )}
    </div>
  );
}

export default KegBrandList;
