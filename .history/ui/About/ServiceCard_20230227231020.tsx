'use client'
import React from 'react'
const ServiceCard = (props: any) => {
console.log(props, 'props')
  return (
    <div>
      <h1 className='text-lg font-bold'>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.brand}</p>
    </div>
  )
}

export default ServiceCard