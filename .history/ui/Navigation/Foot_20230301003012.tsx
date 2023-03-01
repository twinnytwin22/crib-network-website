import Link from 'next/link'
import React from 'react'
import { CardSocialIcons } from 'ui/social-icons'
function Foot() {
  return (
    <div className='flex max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl justify-between mx-auto pb-16 bottom-0 absolute'>
  <div className='font-bold text-white hover:font-extrabold'><Link href='https://app.gitbook.com/o/1eW19tluE2eCVR43yndk/s/Fr0SNse1kdKkE56c9c0z/'>DOCS</Link></div>
  <CardSocialIcons/>
  <div className='font-bold text-white hover:font-extrabold'><Link href='/contact'>CONTACT</Link></div>
    </div>
  )
}

export default Foot