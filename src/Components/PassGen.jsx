import React, { useState } from 'react'

const PassGen = () => {
    const [length, setLength] = useState(8);
    const [charSelected, setCharSelected] = useState(false);
    const [numberSelected, setNumberSelected] = useState(false);
    const [password, setPassword] = useState('');


   const generatePassword = () => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if(numberSelected) {
        str += '0123456789'
    }

    if(charSelected) {
        str += '!@#$%^&*()_+{}[]'
    }


    for(let i = 0; i< length; i++) {
        const randomNums = Math.floor(Math.random() * str.length);
        pass += str[randomNums]
    }
   setPassword(pass)
   }

    return (
        <>

            <div className='bg-[#121212] flex justify-center items-center min-h-screen'>
                <div className='bg-white flex flex-col justify-center items-center w-102 p-4 border rounded shadow-md'>
                    <div className='flex'>
                        <input
                            type="text"
                            placeholder='password'
                            value={password}
                            readOnly={true}
                            className='border w-full px-2 py-1 rounded'
                        />
                        <button onClick={generatePassword} className='bg-cyan-500 text-white px-2 py-1 ml-2 rounded'>Generate</button>
                    </div>
                    <div className='block mt-2 '>
                        <label className='gap-40'>
                            <input type="range" className='mr-2' value={length} onChange={(e) => setLength(e.target.valueAsNumber)} />{length}
                            <input type="checkbox" checked={numberSelected} onChange={(e) => setNumberSelected(!numberSelected)}    name='Numbers' className='ml-4' /> Numbers
                            <input type="checkbox" checked={charSelected} onChange={(e) => setCharSelected(!charSelected)}   name='characters' className='ml-4' /> Characters
                        </label>

                    </div>
                </div>
            </div>


        </>
    )
}

export default PassGen