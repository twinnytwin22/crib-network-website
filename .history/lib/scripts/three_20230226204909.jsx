'use client'
import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: "#ff0000",
          color2: "red"
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
      <p style={{ color: "#fff", paddingTop: "20px" }}>
        Animated website backgrounds in a few lines of code.
      </p>
    </div>
  );
};
