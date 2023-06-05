import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  justify-between h-20 items-center  border-b-2  px-28 sticky top-0 z-50 bg-white'>
      <div className="logo text-3xl font-bold text-black">
        <h1 style={{ color: '#27374D' }}>Juned</h1>
      </div>
      <div className="items text-xl space-x-5 " style={{ color: '#27374D' }}>
        <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '><a href='#Home'>Home</a></span>
        <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '><a href='#Projects'>Projects</a></span>
        <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '><a href='#Skills'>Skills</a></span>
        <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '><a href='#Contact'>Contact</a></span>
      </div>
      <div className="mode">
      </div>
    </div>
  )
}

export default Navbar