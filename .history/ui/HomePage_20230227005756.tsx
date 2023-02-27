'use client'
import React, {useState} from 'react'


function HomePage() {
  const [isHovering, setIsHovering] = useState(false)


  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
  <>
        <div className="flex min-w-sm mx-auto max-w-screen-sm h-full text-center p-12 md:p-24 items-center content-center">
          <div className='w-full'
               onMouseLeave={handleMouseL}>
        <img className='h:full' src="/w_c
        rib-network.svg"/>
        {isHovering && <div className='grid grid-cols-4 mt-20'>
          <div>BRAND</div>
          <div>BRAND</div>
          <div>BRAND</div>
          <div>BRAND</div>
          </div>}
    </div>
    </div>
  </>

  )
}

export default HomePage