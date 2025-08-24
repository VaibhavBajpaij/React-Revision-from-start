import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:25

  }

  return (
    <>
      <h1 className='bg-black text-black-50 p-4 mg-400'>Tailwind test</h1>
      <Card username="Vaibhav Bajpai" someobj={myObj}/>
      <Card username="Bajpai"/>
    </>
  )
}

export default App
