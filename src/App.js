import React,{useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import "fontsource-roboto";

function App() {

   let  [userid, setUserid] = useState('');
   const handleChange = (e)=>{
     let data  = e.target.value;
     //setUserid(data);
   }
   
   return (
    <form className ="App">
    <label>
     UserID :
    <input type="text" name="name" onChange ={handleChange}/>
   </label>
   <br/>
   <label>
     Enter  Maximum Rating :
    <input type="text" name="name" />
  </label>
  <br/>
  <label>
     Enter  Minimum Rating :
    <input type="text" name="name" />
  </label>
  <br/>
  <label>
     Enter  Number of Problem :
    <input type="text" name="name" />
  </label>

  <br/>
   <label>
     Enter your tags Name
   </label>
   <br/>
  <div>
   <span><Checkbox /> 
     dp</span>
     <span><Checkbox/> 
     math</span>
     <span><Checkbox/> 
      implementation</span>
  </div>  
  <input type="submit" name="name" />   
</form>
    
  );
}

export default App;
