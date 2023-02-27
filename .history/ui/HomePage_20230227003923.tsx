'use client'
import React, {useState} from 'react'


function HomePage() {
  const [hover, isHover] = useState(false)

  return (
    <>
        <div className="flex flex-col min-w-sm mx-auto max-w-screen-sm h-full text-center p-12 md:p-24 items-center content-center">
        <img className='h:full' src="/w_crib-network.svg"/>
        
      
    </div></>

  )
}

export default HomePage