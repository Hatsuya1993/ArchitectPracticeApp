import React from 'react'
import {aboututils} from '../Utils/ProjectsUtils'
import AboutDetails from './AboutDetails'

const About = () => {
  return (
    <div className='pb-28 px-10'>
        <h3 className='text-2xl pb-6'>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='py-7 md:grid md:grid-cols-2 lg:grid-cols-4'>
            {aboututils.map(each => (
                <AboutDetails {...each}/>
            ))}
        </div>
    </div>
  )
}

export default About