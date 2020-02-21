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

  return (
    <div style={background}>
      <form style={inventorFormStyle} onSubmit={}>
      <label style={{textAlign:'center', gridColumn: '1 / 6', padding:'30px', fontSize:'40px'}}>Enter new product  information</label>
        <input style={{textAlign:'center', fontSize:'15px'}} type='text' id= '' placeholder= 'Brand Name'/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='integer' id= '' placeholder='Alcohol Content'/>
        <input style={{textAlign:'center', fontSize:'15px' }}  type='text' id= '' placeholder= 'Type of Beer'/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='text' id= '' placeholder= 'Name of Beer'/>
        <input style={{textAlign:'center', fontSize:'15px' }} type='integer' id= '' placeholder='Price per Keg'/>
        <button style={inventoryBtn} type='submit'>SUBMIT</button>
      </form>
    </div>
  );
  console.log(this.state.values)
}


export default NewInventoryForm;
