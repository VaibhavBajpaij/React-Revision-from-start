import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'> 
            <button
            onClick={()=>setColor("red")}
            className='bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red'
            >red
            </button>
            <button
            onClick={()=>setColor("black")}
            className='bg-black text-white px-3 py-1 rounded-md hover:bg-red'
            >black
            </button>
            <button
            onClick={()=>setColor("orange")}
            className='bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-red'
            >Orange
            </button>
            <button
            onClick={()=>setColor("Green")}
            className='bg-green-600 text-white px-3 py-1 rounded-md hover:bg-red'
            >Green
            </button>
            <button
            onClick={()=>setColor("Yellow")}
            className='bg-yellow-600 text-white px-3 py-1 rounded-md hover:bg-red'
            >yellow
            </button>
            <button
            onClick={()=>setColor("blue")}
            className='bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-red'
            >blue
            </button>
            <button
            onClick={()=>setColor("pink")}
            className='bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-red'
            >pink
            </button>
            <button
            onClick={()=>setColor("white")}
            className='bg-white-600 text-black px-3 py-1 rounded-md hover:bg-red'
            >white
            </button>
            <button
            onClick={()=>setColor("gray")}
            className='bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-red'
            >gray
            </button>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
