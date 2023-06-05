import React from 'react'
import { IoLogoHtml5 } from 'react-icons/io'
import { SiCsswizardry, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { FaReact, FaBootstrap } from 'react-icons/fa'
import { DiJava } from 'react-icons/di'
import { TbSql } from 'react-icons/tb'
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

const Skiils = () => {
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    // console.log('inside skills :',bg)
    return (
        <div className='my-24'>
            <h1 className='text-center text-4xl my-12 ' id='Skills' style={{paddingTop:'100px'}} >Skills</h1>
            <div className='flex justify-center px-28 flex-wrap'>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                    <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>

                        <IoLogoHtml5 className='w-24 h-24 text-orange-600' />
                        <h1 className='font-bold text-2xl text-center'>HTML5</h1>
                    </div>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>
                    <SiCsswizardry className='w-24 h-24 text-blue-600' />
                    <h1 className='font-bold text-2xl text-center'>CSS3</h1>
                </div>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>
                    <SiJavascript className='w-24 h-24 text-yellow-600' />
                    <h1 className='font-bold text-2xl text-center'>JavaScript</h1>
                </div>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>
                    <FaReact className='w-24 h-24 text-indigo-600' />
                    <h1 className='font-bold text-2xl text-center'>React</h1>
                </div>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>
                    <SiNextdotjs className='w-24 h-24 ' />
                    <h1 className='font-bold text-2xl text-center'>Next</h1>
                </div>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>
                    <DiJava className='w-24 h-24 text-red-600' />
                    <h1 className='font-bold text-2xl text-center'>Java</h1>
                </div>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>
                    <TbSql className='w-24 h-24 text-orange-600' />
                    <h1 className='font-bold text-2xl text-center'>SQL</h1>
                </div>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>
                    <SiTailwindcss className='w-24 h-24 text-cyan-300' />
                    <h1 className='font-bold text-2xl text-center'>TailwindCSS</h1>
                </div>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    glareEnable={true}
                    // perspective={500}
                >
                <div className='m-10 flex justify-center flex-col items-center relative skillCard rounded-lg p-3 '>
                    <FaBootstrap className='w-24 h-24 text-cyan-950' />
                    <h1 className='font-bold text-2xl text-center'>BootStrap</h1>
                </div>
                </Tilt>

            </div>

        </div>
    )
}

export default Skiils   