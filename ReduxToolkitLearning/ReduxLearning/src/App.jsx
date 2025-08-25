import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement, increment ,reset,incrementByAmount} from './feature/CounterSlice'

function App() {
  const [amount,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  function handelIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }

  return (
    <div>
      <div>
        <button
         onClick={handelIncrementClick}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={handleDecrementClick}
        >
          Decrement
        </button>
        <br />
        <br />
        <button onClick={() => dispatch(reset())}>Reset</button>

        <br />
        <br />
        <input type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
         />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
 
  )
}

export default App
