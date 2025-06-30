import React, { useEffect, useState } from 'react'

const ForSplashScreen = () => {
   const [splash, setSplash] = useState(true);


   useEffect(() => {
    const timer = setInterval(() => {
     setSplash(false)
    }, 1000);
   
   return () => clearInterval(timer)


   }, [] );

  return (
    <>
    <div className='flex justify-center items-center mt-40 text-5xl'>
      {splash ? (<span className='text-red-700'>Loading...</span>) : (<span className='text-yellow-500'>Welcome to world</span>)}
    </div>
    </>
  )
}

export default ForSplashScreen
