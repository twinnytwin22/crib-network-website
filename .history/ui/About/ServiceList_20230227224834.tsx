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
{srv.map((service: any) => {
<ServiceCard service={service}/>})}
    
    </div>
    </>
  )
}

export default ServiceList