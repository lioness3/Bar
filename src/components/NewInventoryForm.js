import React, {useState} from 'react';


function NewInventoryForm() {
  const [info, setInfo] = useState('');
  const background = {

  }
  const inventorFormStyle = {
    display:'grid',
    gridTemplateColumns:' auto auto auto auto auto',
    gridTemplateRows: '100px 100px 100px 200px',
    textAlign:'center',
    gridGap:'5px',
    border:'30px outset #392921',
    position:'absolute',
    zIndex:'-3',
  filter: 'drop-shadow(20px 20px 10px black)',
    background:'rgba(90,70,58)',
    color:'white',
    display:'flex',
  }
  const inventoryBtn = {
    color:'white',
    gridColumn: '1 / 6',
    background:'rgba(90,70,58)',
    gridRow:'4',
    fontSize:'30px',
    border:'none',
  }
  function handleNewFormSubmission(event) {
    event.preventDefault();
  props.onNewInventoryCreation({brand: _brand.value, alcoholContent: _alcoholContent.value, typeBeer: _typeBeer.value, beerName: _beerName.value, id: v4();
    _brand.value = '';
    _alcoholContent.value = '';
    _typeBeer.value = '';
    _beerName
  }
  return (
    <div style={background}>
      <form style={inventorFormStyle} onSubmit={handleNewFormSubmission}>
      <label style={{textAlign:'center', gridColumn: '1 / 6', padding:'30px', fontSize:'40px'}}>Enter new product  information</label>
        <input style={{textAlign:'center', fontSize:'15px'}} type='text' id= 'brand' placeholder= 'Brand Name' ref={(input) => {_brand = input;}}/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='integer' id= 'alcoholContent' placeholder='Alcohol Content' ref={(input) => {_alcoholContent = input;}}/>
        <input style={{textAlign:'center', fontSize:'15px' }}  type='text' id= 'typeBeer' placeholder= 'Type of Beer' ref={(input) => {_typeBeer/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='text' id= '' placeholder= 'Name of Beer' ref={(input) => {/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='integer' id= 'beerName' placeholder='Price per Keg' ref={(input) => {_beerName/>
        <button style={inventoryBtn} type='submit'>SUBMIT</button>
      </form>
    </div>
  );
  console.log(this.state.values)
}


export default NewInventoryForm;
