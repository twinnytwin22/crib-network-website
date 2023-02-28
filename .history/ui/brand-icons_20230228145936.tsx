import React from 'react'
import Link from 'next/link'

function BrandLogos() {
  return (
    <div className='flex'>
        <div className="grid grid-cols-4 gap-2 items-center">
                <div>
                  <Link href="https://thecrib.space">
                    <img className="" src="/cribwhitelogo.png" />
                  </Link>
                </div>
                <div>
                  <Link href="https://cribmusic.xyz">
                    <img className="w-36 p-2" src="/cribmusic_w.png" />
                  </Link>
                </div>
                <div>
                  <Link href="https://twinnytwin.io">
                    <img className="" src="/twinlogo_w.gif" />
                  </Link>
                </div>
                <div>
                  <Link href="https://prns.domains">
                    <img className="" src="/prns_w.png" />
                  </Link>
                </div>
              </div>
    </div>
  )
}

export default BrandLogos