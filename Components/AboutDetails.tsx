import React from 'react'
import { AboutType } from '../Type/type'

const AboutDetails = ({details, img, job, key, name} : AboutType) => {
  return (
    <div className='space-y-3 p-3'>
        <img src={img} alt="someones's face" />
        <h3>{name}</h3>
        <h4 className='text-gray-500'>{job}</h4>
        <p>{details}</p>
        <button className='bg-slate-300 w-full p-2 hover:bg-slate-400'>Contact</button>
    </div>
  )
}

export default AboutDetails