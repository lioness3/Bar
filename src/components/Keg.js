import React, {useState} from 'react';
import KegDropDown from './KegDropDown.js';

import coaster from './images/coaster.png';
import PropTypes from "prop-types";
import './styles.css';
function Keg(props) {

let [priceColor, setColor] = useState('red')

if (parseInt(props.price) > 8){
 priceColor = 'yellow'
}
  let colorCodedByPrice = {
    color: priceColor
  }
  console.log("Keg",props.count);
  return (
    <div className='kegStyle'>
      <h1>{props.brand}</h1>
      <h2>{props.beerName}</h2>
      <h3>{props.alcoholContent} % Alcohol Content</h3>
      <h5>{props.typeBeer}</h5>
      <h5  style={colorCodedByPrice}>$ {props.price} per Keg</h5>
      <img alt="keg" src={coaster} style={{filter: 'drop-shadow(0px 75px 20px  black) sepia(80%) grayscale(10%) opacity(90%)', postion:'relative', zIndex:'-100'}}></img>
      <KegDropDown{...props} sellPint={props.sellPint} count={props.count}/>

    </div>
  );
}
Keg.propTypes = {
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  price: PropTypes.string,
  typeBeer: PropTypes.string,
  beerName: PropTypes.string
};
export default Keg;
