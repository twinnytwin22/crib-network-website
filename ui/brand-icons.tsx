import React from 'react'
import Link from 'next/link'

function BrandLogos() {
  return (
    <div className='flex max-w-full'>
        <div className="grid grid-cols-4 gap-2 items-center">
                <div>
                  <Link href="https://thecrib.space">
                    <img className="hover:scale-110" src="/cribwhitelogo.png" />
                  </Link>
                </div>
                <div>
                  <Link href="https://cribmusic.xyz">
                    <img className="w-36 p-2 hover:scale-110" src="/cribmusic_w.png" />
                  </Link>
                </div>
                <div>
                  <Link href="https://twinnytwin.io">
                    <img className="hover:scale-110" src="/twinlogo_w.gif" />
                  </Link>
                </div>
                <div>
                  <Link href="https://prns.domains">
                    <img className="hover:scale-110" src="/prns_w.png" />
                  </Link>
                </div>
              </div>
    </div>
  )
}

export default BrandLogos