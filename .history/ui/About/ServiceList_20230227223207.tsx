import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from './services'

const ServiceList = () =>{
  return (
    <>
    <div>
    <ServiceCard services={services}/>
    </div>
    </>
  )
}

export default ServiceList