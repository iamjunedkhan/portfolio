import React from 'react'
import {IoLogoHtml5} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiCsswizardry,SiJavascript,SiNextdotjs,SiTailwindcss} from 'react-icons/si'
import Tilt from 'react-parallax-tilt';


const ProjectTile = ({ img, subject, techs,link }) => {
    return (
        <> <Tilt
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareEnable={true}
        perspective={500}
    >
            <div className='border-2 rounded-lg w-72 p-4 m-8 boxShadow1'>
                <div className='relative  rounded-lg shadow-md m-2 h-44'>
                    <img src={img.src} className="w-full " />
                </div>
                <h1 className='text-center text-xl font-semibold m-1 mt-6 mb-2 hover:underline underline-offset-4 hover:text-blue-500'><a href={link} target="_blank" >{subject}</a></h1>
                <div className='flex space-x-2 justify-center my-3'>
                   {techs.includes('html')&& <IoLogoHtml5 className=' hover:scale-125 text-orange-600'  />}
                   {techs.includes('css')&& <SiCsswizardry className=' hover:scale-125 text-indigo-400'  />}
                   {techs.includes('javascript')&& <SiJavascript className=' hover:scale-125 text-yellow-500'  />}
                   {techs.includes('react')&& <FaReact className=' hover:scale-125 text-blue-900' />}
                   {techs.includes('next')&& <SiNextdotjs className=' hover:scale-125'  />}
                   {techs.includes('tailwind')&& <SiTailwindcss className=' hover:scale-125  text-blue-500' />}
                </div>
            </div>
            </Tilt>
        </>
    )
}

export default ProjectTile







