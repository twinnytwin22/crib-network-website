import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from './services'

const ServiceList = () =>{
  return (
    <>
    <div>
        {services.map((service: any) => {
        <ServiceCard service={service}/>
        })}
    </div>
    </>
  )
}

export default ServiceList