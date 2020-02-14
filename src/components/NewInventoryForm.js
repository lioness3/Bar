import React from 'react';


function NewInventoryForm() {
  const background = {

  }
  const inventorFormStyle = {
    display:'grid',
    gridTemplateColumns:' auto auto auto auto auto',
    gridTemplateRows: '100px 200px',
    textAlign:'center',

    gridGap:'5px' ,
     border:'1px solid black',
    position:'absolute',
    top:'200px',
   padding:'100px',
    backgroundColor:'grey',

  }
  const inventoryBtn = {
    color:'Red',
    gridColumn: '1 / 6',
    border:'30px solid white',
    backgroundColor:'grey',
    fontSize:'30px'

  }
  return (
    <div style={background}>
      <form style={inventorFormStyle}>
        <input type='text' id= '' placeholder= 'Brand Name'/>
        <input type='integer' id= '' placeholder='Alcohol Content'/>
        <input type='text' id= '' placeholder= 'Type of Beer'/>
        <input type='text' id= '' placeholder= 'Name of Beer'/>
        <input type='integer' id= '' placeholder='Price per Keg'/>
        <button style={inventoryBtn} type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}


export default NewInventoryForm;
