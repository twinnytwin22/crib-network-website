'use client'
import React from 'react'
import { Bars } from 'react-loader-spinner'
function PageLoaderIcon() {
  return (

    <div className='h-[78vh] mx-auto items-center content-center'>
        <Bars
  height="80"
  width="80"
  color="#fff"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
        </div>
  )
}

export default PageLoaderIcon