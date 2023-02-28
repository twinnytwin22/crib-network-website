'use client'
import React from 'react'
const ServiceCard = (props: any) => {
console.log(props, 'props')
  return (
    <table className='border p-4'>
      <thead>
      <h1 className='text-lg font-bold text-white uppercase text-center'>{props.title}</h1>
      </thead>
      <hr className='w-full'/>
      <p className='text-white'>{props.description}</p>
      <p>{props.brand}</p>
    </table>
  )
}

export default ServiceCard