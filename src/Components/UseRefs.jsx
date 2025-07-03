import React, { useEffect, useRef, useState } from 'react'
import { set } from 'react-hook-form'

const UseRefs = () => {
    const [count, setCount] = useState(0)


    let val =  useRef(0);
   
    const handleIncrement = () => {
        val.current = val.current + 1
        console.log('val is: ', val.current)
        setCount(count + 1)
    }
    
    useEffect(() => {
        console.log("I have be rendered", count)
    })

  return (
    <>
    
 <div className="text-white mt-12">
  <div className="flex flex-col items-center justify-center gap-4">
    
    {/* Count Display */}
    <div className="text-xl font-semibold">
      Count is: {count}
    </div>

    {/* Increment Button */}
    <button
      onClick={handleIncrement}
      className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded shadow-md transition"
    >
      Increment
    </button>

  </div>
</div>


    </>
  )
}

export default UseRefs