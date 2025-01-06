import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#000814] fixed top-0 left-0 right-0 pb-2 flex items-center justify-evenly'>
        <h1 className='text-center font-medium font-montserrat text-white text-3xl m-3'>Omega Events</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list text-white m-3"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
    </div>
  )
}

export default Header;