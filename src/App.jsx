 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/Header'
import Home from './componets/Home'
import Layout from './componets/Layout'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import About from './componets/About'
import FormHooks from './Components/FormHooks'
import Counters from './Components/Counters'

/* let router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Layout />
      <Home />
    </div>
  },
    {
    path: "/about",
    element: <div>
      <Layout />
      <About />
    </div>
  },
    {
    path: "/header",
    element: <div>
      <Layout />
      <Header />
    </div>
  },
]); */

function App() {

  return (

    <>
    <div>
      <Counters />
     {/*  <FormHooks /> */}
  {/*   <RouterProvider router={router} />
 */}
    </div>
    </>
  )
}

export default App
