import React from 'react'
import {projectutils} from '../Utils/ProjectsUtils'
import House from './House'

const Projects = () => {
  return (
    <div className='py-28 px-10'>
        <h1 className='text-2xl pb-6'>Projects</h1>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-4'>
        {projectutils.map(each => {
            console.log(each)
            return <House {...each}/>
        })}
        </div>
    </div>
  )
}

export default Projects