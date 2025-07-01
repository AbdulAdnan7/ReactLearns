import React, { useState } from 'react'

const CurrencyConvertor = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [convertAmount, setConvertAmount] = useState(null);
    const [history, setHistory] = useState([]);
    const [rates, setRates] = useState(null);


    const currencyList = ['USD', 'INR', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CNY', 'AED'];

    return (
        <>
            <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-white'} mb-2 min-h-screen px-4 py-10 `}>
                <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative mt-20">
                    <div className='flex justify-between'>
                        <h1 className='top-4 absolute text-lg font-semibold'>Currency Convertor</h1>
                        {
                            <button onClick={() => setDarkMode(!darkMode)} className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded"
                            >{darkMode ? '☀️ Light' : '🌙 Dark'}</button>
                        }
                    </div>
                    <div className='mt-12 flex flex-col md:flex-row gap-2'>
                        <input value={amount} type="number" className="w-full p-3 border border-gray-300 rounded mb-4 bg-white dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div className='mt-2 flex flex-col md:flex-row gap-4'>
                        <select className="w-full p-3 border border-gray-300 rounded bg-white dark:bg-gray-700 dark:text-white">
                          {
                            currencyList.map((code) => <option key={code} value={code}>{code}</option> )
                          }
                        </select>
                        <select className="w-full p-3 border border-gray-300 rounded bg-white dark:bg-gray-700 dark:text-white">
                           {
                            currencyList.map((code) => <option key={code} value={code} >{code}</option>)
                           }
                        </select>
                    </div>

                    <div className='flex justify-center mt-4'>
                        <button className='bg-cyan-400 hover:bg-cyan-600 w-full transition text-white px-4 py-2 rounded shadow'>Swap</button>
                    </div>


                    <div className='mt-6'>
                        <h1 className='text-lg font-semibold'> 💾 Recent conversion history</h1>
                        <h1>{amount}</h1>
                    </div>

                    <div className='mt-20'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrencyConvertor
