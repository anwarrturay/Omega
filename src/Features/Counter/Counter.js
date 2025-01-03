import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, increaseByAmount } from '../counterSlice';
const Counter = () => {
    const count = useSelector(state=> state.counter.count); // getting the count value from the store.
    const dispatch = useDispatch(); // responsible for dispatching an action to the store.
    const [payload, setPayload] = useState(0);

    const convertedPayload = Number(payload) || 0; // converting string value to an integer value.

    const increaseByANumber = ()=>{
        dispatch(increment())
    }
    
    const  decreaseByANumber = ()=>{
        dispatch(decrement())
    }

    const increaseByCertainAmount = ()=>{
        dispatch(increaseByAmount(convertedPayload))
    }

    const resetScore = ()=>{
        setPayload(0);
        dispatch(reset())
    }

  return (
    <div className='mt-8 flex flex-col items-center justify-between'>
        <div className='text-center font-bold text-3xl'>{count}</div>
        <input 
            type='text'
            placeholder='Amount' 
            className='w-[300px] border border-[#ccc] outline-none focus:ring-2 focus:ring-blue-500 mt-3 py-2
            rounded-md pl-2'
            value={payload}
            onChange={(e)=> setPayload(e.target.value)}
        />
        <div className='mt-4'>
            <button onClick={increaseByANumber} className='border-none bg-blue-500 text-white py-2 px-5 rounded-md m-2'>add</button>
            <button onClick={decreaseByANumber} className='border-none bg-blue-500 text-white py-2 px-5 rounded-md m-2'>Decrement</button>
            <button onClick={resetScore} className='border-none bg-blue-500 text-white py-2 px-5 rounded-md'>Reset</button>
            <button onClick={increaseByCertainAmount} className='border-none bg-blue-500 text-white py-2 px-5 rounded-md m-2'>Add Amount</button>
        </div>
    </div>
  )
}

export default Counter