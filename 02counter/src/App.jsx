import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  let [Counter,setCounter]= useState(5)

  // let Counter =5;
  const addvalue = ()=>{
     if (Counter<20){
   Counter +=1
  } 
  else{
    Counter = 20
  }
  setCounter(Counter)
  }
  const removeValue = () =>{
    
  if (Counter>0){
   Counter -=1
  } 
  else{
    Counter = 0
  }
  setCounter(Counter)
  }
  return (
    <>
    <h1> Shailesh Learning React </h1>
    <h2>Counter Value: {Counter}</h2>
    <button
    onClick={addvalue}
    >Add Value</button>
    <br />
    <button
    onClick={removeValue}
    >Decrease Value</button>
    </>
  )
}

export default App
