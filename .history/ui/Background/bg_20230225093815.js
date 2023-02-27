import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min' 
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props: any) => {
  const [vantaEffect, setVantaEffect] = useState(null) 
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    Foreground content goes here
  </div>
}