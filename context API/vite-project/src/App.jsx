import { useState } from 'react'
import UserContext from './UserContext'
import UserContextProvider from './UserContextProvider'
import Login from './Login'
import Profile from './Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>this is vaibhav </h1>
     <UserContextProvider>
      <h1>React with Vaibhav bajpai</h1>
      <Login/>
      <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
