import { useState } from 'react'




function App() {

  let [counter,setCounter]=useState(0)

 // let counter=5;
  const addValue= ()=>{
    console.log("Clicked ");
    setCounter(counter+1);
  }
  const removevalue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }else{
      alert("You number can can not og on negative number");
    }
    
  }

  return (
    <>
     <h1>this is me vaibhav Bajpai</h1> 
     <h2>Counter value:{counter}</h2>
     <button 
     onClick={addValue}
     >Add value</button>
     <br/>
     <button onClick={removevalue}>Remover Value</button>
    </>
  )
}

export default App
