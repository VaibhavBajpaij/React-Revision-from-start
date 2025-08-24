import { createContext, useState } from 'react'
import './App.css'
import ChildA from './ChildA'

// ✅ Create Context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState('Vaibhav is Greatest of All time ');
  const [color, setColor] = useState('light'); // "light" or "dark"

  return (
    <>
      <UserContext.Provider value={{ user, setUser, color, setColor }}>
        <div 
          id="container" 
          style={{
            backgroundColor: color === 'light' ? 'white' : 'black',
            color: color === 'light' ? 'black' : 'white',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <h1>Hello, {user}</h1>
          <ChildA />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App;
export { UserContext };
