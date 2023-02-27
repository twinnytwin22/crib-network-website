import React from 'react'
import { CardSocialIcons, FooterSocialIcons } from 'ui/social-icons'

function Nav() {
  return (
    <div className='max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex justify-between mx-auto'>
   <CardSocialIcons/>
    <div className='font-bold text-white hover:font-extrabold'>ABOUT</div>
    </div>
  )
}

export default Nav