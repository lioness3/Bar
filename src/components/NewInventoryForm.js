import React from 'react';


function NewInventoryForm() {
  const background = {

  }
  const inventorFormStyle = {
    display:'grid',
    gridTemplateColumns:' 200px 200px 200px 200px 200px',
    gridTemplateRows: '200px 100px 200px',
    textAlign:'center',
    gridGap:'5px',
    border:'1px solid black',
    position:'absolute',

    backgroundColor:'grey',
    margin:'300px'
  }
  const inventoryBtn = {
    color:'Red',
    gridColumn: '1 / 6',
    backgroundColor:'grey',
    fontSize:'30px'

  }
  return (
    <div style={background}>
      <form style={inventorFormStyle}>
      <label style={{textAlign:'center',gridColumn: '1 / 6'}}>Enter new product eneter information</label>
        <input style={{textAlign:'center', fontSize:'15px'}} type='text' id= '' placeholder= 'Brand Name'/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='integer' id= '' placeholder='Alcohol Content'/>
        <input style={{textAlign:'center', fontSize:'15px' }}  type='text' id= '' placeholder= 'Type of Beer'/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='text' id= '' placeholder= 'Name of Beer'/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='integer' id= '' placeholder='Price per Keg'/>
        <button style={inventoryBtn} type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}


export default NewInventoryForm;
