import React from 'react'
import { FooterSocialIcons } from 'ui/social-icons'

function Nav() {
  return (
    <div className='max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex justify-between mx-auto'>
   <FooterSocialIcons/>
    <div>Nav</div>
    </div>
  )
}

export default Nav