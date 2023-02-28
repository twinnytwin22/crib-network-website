import Link from 'next/link'
import React from 'react'
import { CardSocialIcons, FooterSocialIcons } from 'ui/social-icons'

function Nav() {
  return (
    <div className='flex max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl justify-between mx-auto'>
     <div className='font-bold text-white hover:font-extrabold'><Link href='/'>HOME</Link></div>
    <img src='w_crib-network.svg'></img>
    <div className='font-bold text-white hover:font-extrabold'><Link href='/about'>ABOUT</Link></div>
    </div>
  )
}

export default Nav