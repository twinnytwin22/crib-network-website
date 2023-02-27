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
        <div className="flex min-w-sm mx-auto max-w-screen-sm h-full text-center p-12 md:p-24 items-center content-center"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}>
          <div className='w-full'
               >
                
        <img className='h-full w-full' src="/w_crib-network.svg"/>
        {isHovering && <div className='grid grid-cols-4 mt-20'>
          <div>BRAND</div>
          <div>BRAND</div>
          <div>BRAND</div>
          <div><img src='/prns_w.png'/></div>
          </div>}
    </div>
    </div>
  </>

  )
}

export default HomePage