'use client'
import React from 'react'
import ServiceCard from './ServiceCard'
import services from './services'
const ServiceList = () =>{
  const srv = services() 
  console.log(srv)
  return (
    <>
    <div>
    {srv.map((service, i) => (
        <ServiceCard
          key={i}
          title={service.title}
          description={service.description}
          brand={service.brand}
        />
      ))}
    </div>
    </>
  )
}

export default ServiceList