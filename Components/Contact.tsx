import React from 'react'

const Contact = () => {
  return (
    <div className='pb-28 px-10'>
        <h1 className='text-2xl'>Contact</h1>
        <div className='py-6'>
            <p>Lets get in touch and talk about your next project.</p>
            <div className='py-3 space-y-4'>
            <input type="text" placeholder='Name' className='border w-full p-2'/>
            <input type="text" placeholder='Email' className='border w-full p-2'/>
            <input type="text" placeholder='Subject' className='border w-full p-2'/>
            <input type="text" placeholder='Comment' className='border w-full p-2'/>
            </div>
            <button className='bg-black text-white p-2'>SEND MESSAGE</button>
        </div>
    </div>
  )
}

export default Contact