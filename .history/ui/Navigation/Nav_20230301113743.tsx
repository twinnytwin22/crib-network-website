'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
function Nav() {
  const path = usePathname()

console.log(path)

  return (
    <div className='flex max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl justify-between mx-auto'>
     <div className='font-bold text-white hover:font-extrabold'><Link href='/about'>ABOUT</Link></div>
     {path !== '/' ?
     <Link href='/'><img className='w-24' src='w_crib-network.svg'></img></Link> : <div className='h-14'></div>}
    <div className='font-bold text-white hover:font-extrabold'><Link href='/products'>PRODUCTS</Link></div>
    </div>
  )
}

export default Nav