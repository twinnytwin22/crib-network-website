'use client'
import React from 'react'
const ServiceCard = (props: any) => {
console.log(props, 'props')
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default ServiceCard