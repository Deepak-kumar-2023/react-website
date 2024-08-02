import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [varible,Function]=useState(15)

   const incremet = ()=> {
    Function(varible+1);
   }
   const dec = ()=> {
    Function(varible-1);
   }
  return (
    <>

      <h1>creating counter in react </h1>
      <h2>creating increament and decriment counter </h2>
      <button onClick={incremet}>increment {varible}</button>
      <br /><br />
      <button onClick={dec}>decrement {varible}</button>

     <footer>counter {varible}</footer>
      
     
    </>
  )
}

export default App
