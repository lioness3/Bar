import React, {useState} from 'react';
import KegDropDown from './KegDropDown.js';
import Count from './Count.js';
import coaster from './images/coaster.png';
import PropTypes from "prop-types";

function Keg(props) {
const kegStyle = {
textAlign:'center',
margin:'10px',
background: 'rgba(0,0,0,0.5)',
color:'rgba(200,200,200,.6)',
textShadow:'10px 8px 1px black',
filter:'none !importnant',
fontSize: '20px',
padding:'10px',
width: '600px',
display:'inline-block',
height:'800px'
}

let [color, setColor] = useState('blue', colorCode )
let colorCode = ()=>{
  if (props.price > 3){
    setColor('red')

  }
}
let colorCodedByPrice = {
  color: color,
}
console.log(colorCode.value);
colorCode()
  return (
    <div style={kegStyle}>
      <h1>{props.brand}</h1>
      <h2>{props.name}</h2>
      <h3>{props.alcoholContent} % Alcohol Content</h3>
      <h5>{props.type}</h5>
      <h5  style={colorCodedByPrice}>$ {props.price} per Keg</h5>
      <img alt="keg" src={coaster} style={{filter: 'drop-shadow(0px 75px 20px  black) sepia(80%) grayscale(10%) opacity(90%)', postion:'relative', zIndex:'-100'}}></img>
      <KegDropDown/>
        <Count count={10}/>
    </div>
  );
}
Keg.propTypes = {
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,

};
export default Keg;
