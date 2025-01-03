import React from 'react'
import { allItems } from '../Features/itemsSlice'
import { useSelector } from 'react-redux'
const Footer = () => {
    const items  = useSelector(allItems)
  return (
    <div className='flex items-end justify-center text-xl bottom-0 font-montserrat'>
        {items.length > 0 ?
                <div className='flex items-center '>
                    <strong className='text-2xl mr-2'>{items.length}</strong>
                    {items.length > 1 ? 'items' : 'item'} found on List.
                </div>
            :   
            <p className='text-red-800 font-medium'>No item Found.</p>
        }
    </div>
  )
}

export default Footer;