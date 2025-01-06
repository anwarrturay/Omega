import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../Features/itemsSlice';
const InputArea = () => {
  const [listItem, setListItem] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () =>{
    if (listItem && date ){
      console.log(listItem);
      console.log(date);
      dispatch(addNewItem(listItem, date)); // dispatching an action to the store.
      setListItem('');
      setDate('');
    } 
  }

  return (
    <>
      <form className='flex items-center justify-center mt-5 '>
        <div className="flex items-center justify-center flex-col mt-2 lg:flex lg:flex-row lg:mt-3">
          <input 
            type="text" 
            className="border border-[#ccc] m-2 w-[300px] py-2.5 pl-2 rounded-md outline-none placeholder:font-montserrat xs:w-[420px] sm:w-[600px] md:w-[690px] lg:w-[300px] xl:w-[400px] xl:m-3 focus:ring-2 focus:ring-blue-500" 
            id="inputText" 
            placeholder="What to do....."
            required
            value={listItem}
            onChange={(e)=> setListItem(e.target.value)}
          />
          
          <input
            id='date'
            className='border border-[#ccc] m-2 w-[300px] py-2.5 rounded-md outline-none cursor-pointer placeholder:font-montserrat xs:w-[420px] sm:w-[600px] md:w-[690px] lg:w-[300px] xl:w-[400px] xl:m-3 focus:ring-2 focus:ring-blue-500'
            type='datetime-local'
            value={date}
            onChange={(e)=> setDate(e.target.value)}
          />

          {listItem && date && (
            <button
              id='addBtn'
              type='submit'
              className='bg-teal-400 py-2 px-3 mt-2 rounded-lg cursor-pointer text-3xl font-medium font-montserrat xl:text-center text-blue-500'
              onClick={handleSubmit}
            >+</button>
          )}
        </div>
      </form>
    </>
  );
}

export default InputArea;
