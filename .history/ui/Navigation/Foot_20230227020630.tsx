import Link from 'next/link'
import React from 'react'

function Foot() {
  return (
    <div className='max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex justify-between mx-auto pb-16'>
  <div className='font-bold text-white hover:font-extrabold'>DOCS</div>
  <div className='font-bold text-white hover:font-extrabold'><Link href='/contact'>CONTACT</Link></div>
    </div>
  )
}

export default Foot