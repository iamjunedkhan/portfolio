import React from 'react'
import il5 from './images/il5.png'
const Section = () => {
    return (
        <div className='flex items-center justify-between px-28 relative' >
            <div id='Home' className='absolute -top-32' ></div>
            <div className="left  flex-1  ">
                <h1 className='text-5xl font-bold'>Hello, I am Juned</h1>
                <div className='flex '>
                    <h1 className='text-3xl text-gray-500 mt-2'>A Web Developer</h1>
                    <div className='words flex flex-col text-3xl text-blue-500 mt-2 ml-2 '>
                        <span>React JS</span>
                        <span>Next JS</span>
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Tailwind CSS</span>
                        <span>Bootstrap</span>
                        <span>React JS</span>
                        <span>Next JS</span>
                        <span>JavaScript</span>
                        <span>HTML</span>
                    </div>
                </div>
            </div>
            <div className="right  flex-1  w-2/5 ">
                <img src={il5.src} alt="" />
            </div>
        </div>
    )
}

export default Section