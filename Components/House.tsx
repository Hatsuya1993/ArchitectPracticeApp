import React from 'react'
import { HouseType } from '../Type/type'

const House = ({title, img} : HouseType) => {
  return (
    <div className='relative m-5'>
        <h4 className='absolute bg-black text-white p-2'>{title}</h4>
        <img src={img} alt="" />
    </div>
  )
}

export default House