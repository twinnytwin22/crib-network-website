'use client'
import Link from 'next/link';
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
        {isHovering && <div className='grid grid-cols-4 max-w-screen mt-20 items-center'>
        <div><Link href='https://cribmusic.xyz'><img className='' src='/cribmusic_w.png'/></Link></div>
          <div><Link href='https://thecrib.space'><img className='' src='/cribwhitelogo.png'/></Link></div>
          <div><Link href='https://twinnytwin.io'><img className='' src='/twinlogo_w.gif'/></Link></div>
          <div><Link href='https://prns.domains'><img className='' src='/prns_w.png'/></Link></div>
          </div>}
    </div>
    </div>
  </>

  )
}

export default HomePage