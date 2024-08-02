import { useState } from 'react'
import './App.css'


function App() {
  
  const [color,setcolor] =useState('olive')


  return (
    <>
     <div className="w-full h-screen  flex justify-center items-center"
     style={{backgroundColor:color}}>
      <h1 className='text-4xl font-bold text-white'>Background Color Changer
        <br />
        color: {color}
      </h1>

      <div className='fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2
      '>
        <div className='flex flex-wrap justify-center
        gap-3 bg-white px-3 py-2
        rounded-full text-white shadow-lg '
         >
        <button
        onClick={()=>{setcolor("red")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'red'}}
        >red </button>
        <button
        onClick={()=>{setcolor("green")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'green'}}
        >green </button>
        <button
        onClick={()=>{setcolor("blue")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'blue'}}
        >blue </button>
        <button
        onClick={()=>{setcolor("pink")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'pink'}}
        >pink </button>
        <button
        onClick={()=>{setcolor("orange")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'orange'}}
        >orange </button>
        <button
        onClick={()=>{setcolor("violet")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'violet'}}
        >violet </button>
        <button
        onClick={()=>{setcolor("black")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'black'}}
        >black </button>
        <button
        onClick={()=>{setcolor("gray")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'gray'}}
        >gray </button>

         <button
        onClick={()=>{setcolor("yellow")}} className='outline-none px-4 rounded-full text-white shadow-lg '
        style={{backgroundColor:'yellow'}}
        >yellow </button>
          </div>
      </div>
     
    
     </div>
      
    </>
  )
}

export default App
