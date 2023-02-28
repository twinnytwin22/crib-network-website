import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from './services'

function ServiceList() {
  return (
    <>
    <div>
        {services.map((service: any) => {
        <ServiceCard services={services}/>})}
    </div></>
  )
}

export default ServiceList