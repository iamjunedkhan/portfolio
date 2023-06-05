import React from 'react'
import il1 from './images/il1.png'
import il2 from './images/il2.png'
import il3 from './images/il3.png'
import il4 from './images/il4.png'
import ProjectTile from './ProjectTile'

const Projects = () => {
  return (
    <div>
        <h1 className='text-center text-4xl my-12 ' id='Projects' style={{paddingTop:'100px'}}>Projects</h1>
        <div className='flex justify-center flex-wrap'>
                <ProjectTile img={il1} subject={'Resume Builder'} techs ={['react','html','css','next','javascript','tailwind']} />
                <ProjectTile img={il2} subject={'Resume Builder'} techs ={['react','html','css','next','javascript']} />
                <ProjectTile img={il3} subject={'Resume Builder'} techs ={['html','css','next','tailwind']} />
                <ProjectTile img={il4} subject={'Resume Builder'} techs ={['react','html','css','javascript',]} />
        </div>
    </div>
  )
}

export default Projects