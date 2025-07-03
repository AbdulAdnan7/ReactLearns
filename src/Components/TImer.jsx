import React, { useRef, useState } from 'react'

const TImer = () => {
    const [timer, setTimer] = useState(0)

    let timeRef = useRef(null);

    const onStart = () => {
        if(timeRef.current !== null) return
      timeRef.current = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
    }

     const handleStop = () => {
        clearInterval(timeRef.current);
      timeRef.current = null
     }


    const handleReset = () => {
        handleStop();
        setTimer(0)
    }

  return (
    <>
  {/* Timer Display */}
<div className="flex justify-center mt-20 text-3xl font-semibold text-white">
  Time: {timer}
</div>

{/* Control Buttons */}
<div className="flex flex-col items-center mt-10 gap-4">
  <button onClick={onStart} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded shadow-md transition">
    Start
  </button>
  <button onClick={handleStop} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded shadow-md transition">
    Stop
  </button>
  <button onClick={handleReset} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded shadow-md transition">
    Reset
  </button>
</div>

    </>
   
  )
}

export default TImer