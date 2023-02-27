'use client'
import React, {useState} from 'react'


function HomePage() {
  const [hover, isHover] = useState(false)

  return (
  <>
    <div className="flex min-w-sm mx-auto max-w-screen-sm h-full text-center p-12 md:p-24 items-center content-center">
      <div className='flex flex-col'>
        <img className='h:full block' src="/w_crib-network.svg"/>
        {hover && <div className='grid grid-cols-4'>
          <div>Brand Logo</div>
          <div>Brand Logo</div>
          <div>Brand Logo</div>
          <div>Brand Logo</div>
          </div>}
      </div>
    </div>
  </>

  )
}

export default HomePage