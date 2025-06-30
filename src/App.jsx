import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackChanger from './Components/BackChanger'
import Todo from './Components/Todo'
import PassGen from './Components/PassGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PassGen />

{/*     <Todo /> */}
{/*      <BackChanger /> */}
    </>
  )
}

export default App
