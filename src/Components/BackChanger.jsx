import React, { useState } from 'react'

const BackChanger = () => {
    const [color, setColor] = useState('olive')
  return (
    <>
    <div className='w-full min-h-screen' style={{backgroundColor: color}} >
        <h1 className='text-3xl flex justify-center font-bold' >Bg: {color}</h1>
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white text-white py-3 px-3 rounded-full shadow-lg flex gap-6 items-center z-50">
      <div className='bg-red-500 px-4 py-1 rounded-3xl'><button onClick={() => setColor('red')} >Red</button></div>
      <div className='bg-cyan-500 px-4 py-1 rounded-3xl'><button onClick={() => setColor('cyan')} >Cyan</button></div>
      <div className='bg-blue-800 px-4 py-1 rounded-3xl'><button onClick={() => setColor('blue')}  >Blue</button></div>
      <div className='bg-purple-500 px-4 py-1 rounded-3xl'><button onClick={() => setColor('purple')}  >Purple</button></div>
      <div className='bg-green-700 px-4 py-1 rounded-3xl'><button onClick={() => setColor('green')}  >Green</button></div>
    </div>
    </div>

    </>
  )
}

export default BackChanger