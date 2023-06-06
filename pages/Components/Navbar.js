import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrFormClose} from 'react-icons/gr'
const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='flex  justify-between h-20 items-center  border-b-2  sm:px-28 px-8 sticky top-0 z-50 bg-white'>
      <div className="logo text-3xl font-bold text-black">
        <h1 style={{ color: '#27374D' }}>Juned</h1>
      </div>
      <div className='absolute right-8 sm:hidden text-2xl top-1/2 -translate-y-1/2'>
        {!showNav && <GiHamburgerMenu onClick={()=>setShowNav(true)} />}
        {showNav && <GrFormClose onClick={()=>setShowNav(false)} />}
      </div>
      <div className={`items text-xl py-8 sm:py-0   absolute top-20 ${showNav?'left-0':'-left-full'} space-y-4 sm:space-y-0 bg-white w-full flex  flex-col items-center justify-center sm:static sm:flex-row sm:space-x-5 transition-all duration-150 `} style={{ color: '#27374D' }}>
        <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150    '><a href='#Home' onClick={()=>setShowNav(false)}>Home</a></span>
        <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150    '><a href='#Projects' onClick={()=>setShowNav(false)}>Projects</a></span>
        <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150    '><a href='#Skills' onClick={()=>setShowNav(false)}>Skills</a></span>
        <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150    '><a href='#Contact' onClick={()=>setShowNav(false)}>Contact</a></span>
      </div>
      <div className="mode">
      </div>
    </div>
  )
}

export default Navbar