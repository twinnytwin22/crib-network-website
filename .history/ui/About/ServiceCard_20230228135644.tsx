'use client'
import React from 'react'
const ServiceCard = (props: any) => {
console.log(props, 'props')
  return (
    <div className='border p-4'>
      <h1 className='text-lg font-bold text-white uppercase'>{props.title}</h1>
      <hr className='w-screen-md'/>
      <p className='text-white'>{props.description}</p>
      <p>{props.brand}</p>
    </div>
  )
}

export default ServiceCard