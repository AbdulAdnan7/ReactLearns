import React from 'react'
import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-600 py-4'>
        <ul className='flex gap-4 justify-center'>
            <li className='text-2xl'>
            <NavLink to='/' className={({isActive}) =>    isActive ? 'bg-orange-500 text-white px-3 py-1 rounded' : 'text-white px-3 py-1'}>Home</NavLink>
        </li> 
          <li className='text-2xl'>
            <NavLink to='/header' className={({isActive}) =>    isActive ? 'bg-orange-500 text-white px-3 py-1 rounded' : 'text-white px-3 py-1'}>Header</NavLink>
          </li>
          <li className='text-2xl'>
            <NavLink to='/about' className={({isActive}) =>    isActive ? 'bg-orange-500 text-white px-3 py-1 rounded' : 'text-white px-3 py-1'}>
            About
            </NavLink>
          </li>
        </ul>
       
    </div>
  )
}

export default Navbar