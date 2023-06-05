import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {TbBrandLinkedin,TbBrandFiverr} from 'react-icons/tb'
const Contact = () => {
    return (
        <div className='my-24'>
            <h1 className='text-center text-4xl my-12 ' id='Contact' style={{paddingTop:'100px'}} >Contact</h1>
            <div className='flex justify-center'>
            <a href='https://github.com/iamjunedkhan' target="_blank" > <FiGithub className='text-4xl m-6 icons hover:text-blue-500' /></a>
            <a href='https://www.linkedin.com/in/iamjunedkhan/' target="_blank" > <TbBrandLinkedin className='text-4xl m-6 icons hover:text-blue-500' /></a>
            <a href='https://www.fiverr.com/junedkhan315' target="_blank"> <TbBrandFiverr className='text-4xl m-6 icons hover:text-blue-500' /></a>
            </div>

        </div>
    )
}

export default Contact