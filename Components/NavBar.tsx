import React from 'react'

const NavBar = () => {
  return (
    <div className='shadow-md p-5 md:flex md:items-center md:justify-between'>
        <div>
            <h1 className='text-lg'><span className='font-medium px-2'>BR</span> Architects</h1>
        </div>
        <div className='hidden md:block'>
            <ul className='flex space-x-5 font-semibold'>
                <li>
                    Projects
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar