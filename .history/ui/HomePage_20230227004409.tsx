'use client'
import React, {useState} from 'react'


function HomePage() {
  const [hover, isHover] = useState(false)

  return (
  <>
        <div className="flex min-w-sm mx-auto max-w-screen-sm h-full text-center p-12 md:p-24 items-center content-center">
          <div className='flex flex-col w-full'>
        <img className='h:full' src="/w_crib-network.svg"/>
        {!hover && <div className='grid grid-cols-4'>
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