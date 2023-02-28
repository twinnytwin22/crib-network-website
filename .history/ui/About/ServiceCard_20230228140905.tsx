'use client'
import React from 'react'
const ServiceCard = (props: any) => {
console.log(props, 'props')
  return (
    <table className='border p-4'>
      <thead className=''>
      <h1 className='text-md font-bold text-white uppercase text-center p-1'>{props.title}</h1>
      </thead>
      <hr className='w-full'/>
      <p className='text-white p-4'>{props.description}</p>
      <p>{props.brand}</p>
    </table>
  )
}

export default ServiceCard