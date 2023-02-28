'use client'
import React from 'react'
const ServiceCard = (props: any) => {
console.log(props, 'props')
  return (
    <table className='border p-4'>
      <thead className='bg-gray-800 text-md font-bold text-white uppercase text-center p-1'>
        <tr><th>
{props.title}</th></tr>
      </thead>
      <hr className='w-full'/>
      <p className='text-white p-3 leading-snug'>{props.description}</p>
      <p>{props.brand}</p>
    </table>
  )
}

export default ServiceCard