import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  justify-between h-20 items-center  border-b-2  px-28'>
        <div className="logo text-3xl font-bold text-black">
                <h1 style={{color:'#27374D'}}>Juned</h1>
        </div>
        <div className="items text-xl space-x-5 " style={{color:'#27374D'}}>
            <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '>Home</span>
            <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '>About</span>
            <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '>Projects</span>
            <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '>Skills</span>
            <span className='cursor-pointer hover:text-blue-500 hover:font-bold transition-all duration-150 mx-2 px-2   '>Contact</span>
        </div>
        <div className="mode">
        </div>
    </div>
  )
}

export default Navbar