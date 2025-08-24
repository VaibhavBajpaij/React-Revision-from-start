import { useContext } from 'react'
import { UserContext } from './App'
import './ChildC.css'

const ChildC = () => {
  const { color, setColor } = useContext(UserContext)

  const handleColorChange = () => {
    setColor(color === 'light' ? 'dark' : 'light')
  }

  return (
    <div id="container">
      <button 
        onClick={handleColorChange} 
        style={{
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: color === 'light' ? 'black' : 'white',
          color: color === 'light' ? 'white' : 'black',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        Switch to {color === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}

export default ChildC
