'use client'
import React from 'react'
import { Bars } from 'react-loader-spinner'
function PageLoaderIcon() {
  return (

    <div>
        <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
        </div>
  )
}

export default PageLoaderIcon