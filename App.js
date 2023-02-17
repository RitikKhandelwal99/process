import axios from 'axios'
import React from 'react'


const App = () => {
  
  const onSubmit =async() => {
    
  await axios.get("https://localhost:6000/register")
     .then((res) => {
    console.log(res.data);
   })
  }
  
  
  
  
   
      
    
    

  return(
    <>
    <div className="heading">
      <h1> React Component</h1>
      <div className="test">
        <button onClick={onSubmit}>Add</button>
        </div>
        </div>
    </>
  )

  }


export default App