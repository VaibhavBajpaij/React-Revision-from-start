import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAll] = useState(false)
  const [password, setPassword] = useState("")
  // useRefhook
  const PasswordRef=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    PasswordRef.current.select();
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed,setPassword])

  return (
    <>
      <div className="w-full px-bottom- max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <h1 className='font-bold text-blue-400'>Password Genrater</h1>
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            
            value={password}
            className="bg-cyan-100 text-black font-extrabold outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={PasswordRef}
          />
          <button onClick={copyPasswordToClipBoard} className="bg-blue-600 px-6 rounded-lg shadow-2xl shadow-yellow-600 mx-3 text-white "> copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range"  min={6} max={100} className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }}></input>
            <label htmlFor='numberInput'>Number</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
              setCharAll((prev)=> !prev)
            }}></input>
            <label htmlFor='CharacterInput'>Charcters</label>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
