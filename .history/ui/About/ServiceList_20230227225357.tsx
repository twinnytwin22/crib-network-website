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
    {srv.map((service, index) => (
        <ServiceCard
          key={index.toString()}
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