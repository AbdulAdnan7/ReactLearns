import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackChanger from './Components/BackChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BackChanger />
    </>
  )
}

export default App
