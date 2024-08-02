import { useState, useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [lenth, setLenth] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // use ref hook
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=> {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  
    if(numberAllowed)  str+="0123456789";
    if(symbolAllowed)  str+="!@#$%^&*()+";
    for(let i=0;i<lenth;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass=str.charAt(index) + pass
    }
     setPassword(pass)
    
  },[lenth,numberAllowed,symbolAllowed,setPassword])
  
  const copyToClipboard=useCallback(()=>{
    passwordRef.current.select()


    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[lenth,numberAllowed,symbolAllowed,passwordGenerator])

  return (
   <>
   <div className='bg-gray-900 w-full h-screen flex justify-center items-center flex-col'>
    <div className='text-white font-semibold text-4xl  '>password generator</div>
    <div className='w-full max-w-md h-40 my-4 shadow-md
    rounded-lg px-4 py-6  text-black bg-gray-500' >
      <div className='flex shadow rounded-lg
      py-5  overflow-hiddenmb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-2 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        className='outline-none bg-blue-800 text-white px-4
        hover:bg-green-700 py-0.5 shrink-0 '
        onClick={copyToClipboard}
        >copy</button>

      </div>
    <div className='flex text-sm gap-x-2'>
      <div className=' flex items-center gap-x-1 gap-y-2'>
        <input type="range"
        min={6}
        max={100}
        value={lenth}
        onChange={(e)=>setLenth(e.target.value)}
        />
        <label htmlFor="" > length {lenth}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={(e)=>setNumberAllowed((prev)=>!prev)}
      />
       <label htmlFor=""> Numbers</label>
       </div>


      <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      defaultChecked={symbolAllowed}
      id='numberInput'
      onChange={(e)=>setSymbolAllowed((prev)=>!prev)}
      />
       <label htmlFor=""> special char</label>
       </div>

    <div>
      <button
      className='bg-blue-800 text-white px-4
      hover:bg-pink-900 py-0.5 shrink-0 '
      onClick={passwordGenerator}
      >Refresh</button>
    </div>
       
    </div>

    </div>

   </div>
   </>
  )
}

export default App
