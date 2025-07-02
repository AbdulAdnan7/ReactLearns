import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";


const Counters = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-3xl font-bold">Redux Counter: {count}</h1>
      <div className="flex gap-4">
        <button onClick={() => dispatch(increment())} className="bg-green-500 px-4 py-2 text-white rounded">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 px-4 py-2 text-white rounded">
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="bg-gray-500 px-4 py-2 text-white rounded">
          Reset
        </button>
      </div>
    </div>
    </>
  )
}

export default Counters
