import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-600'>
        <ul className='flex gap-4 justify-center'>
            <li className='text-2xl'>
            <Link to='/'>Home</Link>
        </li> 
          <li className='text-2xl'>
            <Link to='/header'>Header</Link>
          </li>
          <li className='text-2xl'>
            <Link to='/about'>
            About
            </Link>
          </li>
        </ul>
       
    </div>
  )
}

export default Navbar