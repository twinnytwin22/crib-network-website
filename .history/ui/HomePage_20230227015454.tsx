'use client'
import Link from 'next/link';
import React, {useState, useEffect} from 'react'


const HomePage = ({ rotation = 0, timing = 150 }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [Transform, setTransform] = useState("translate(-50%, -50%)");

  const handleMouseEnter = () => {
    setIsHovering(true);
    setTransform("translate(-50%, -60%)");

  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform("translate(-50%, -50%)");

  };
  const style = {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isHovering
      ? `rotate(${rotation}deg)`
      : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  };


  return (
  <>
    <div className="flex min-w-sm mx-auto max-w-screen-sm h-full text-center p-12 md:p-24 items-center content-center"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}  >
      <div className='w-full'>
        <img className='h-full w-full' src="/w_crib-network.svg"/>
        {isHovering && 
        <>
          <h3 className='mt-20 text-white uppercase font-bold'>Brands</h3>
            <div className='grid grid-cols-4 gap-2 items-center'>
              <div><Link href='https://thecrib.space'><img className='' src='/cribwhitelogo.png'/></Link></div>
              <div><Link href='https://cribmusic.xyz'><img className='w-36 p-2' src='/cribmusic_w.png'/></Link></div>
              <div><Link href='https://twinnytwin.io'><img className='' src='/twinlogo_w.gif'/></Link></div>
              <div><Link href='https://prns.domains'><img className='' src='/prns_w.png'/></Link></div>
            </div>
        </>}
      </div>
    </div>
  </>
  )
};

export default HomePage