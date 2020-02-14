import React from 'react';


function NewInventoryForm() {
  const background = {

  }
  const inventorFormStyle = {
    display:'grid',
    gridTemplateColumns:' auto auto auto',
    gridGap:'5px' ,
     border:'1px solid black',
    position:'absolute',
    top:'200px',
    width:'600px',
    backgroundColor:'grey',

  }
  const inventoryBtn = {
    color:'Red'
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
