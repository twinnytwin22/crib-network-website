import React from 'react'
import AboutCopy from 'ui/About/AboutCopy'
import ServiceList from 'ui/About/ServiceList'

function About() {
  return (
    <div className="h-[78vh] mx-auto">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 max-w-sm md:max-w-7xl  md:p-0'>
        <AboutCopy/>
   <ServiceList/>
   </div>
   </div>
  )
}

export default About