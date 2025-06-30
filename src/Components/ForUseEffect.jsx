import React, { useEffect, useState } from 'react'

const ForUseEffect = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());


    useEffect(() => {
        const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        }, 1000);
      console.log(timer)
        return () => clearInterval(timer)
    }, [])
  return (
    <>
      <div>
        {time}
      </div>
    </>
  )
}

export default ForUseEffect;
