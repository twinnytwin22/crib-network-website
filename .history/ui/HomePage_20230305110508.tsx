"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import BrandLogos from "./brand-icons";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const HomePage = ({ rotation = 0, timing = 150 }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [Transform, setTransform] = useState("translate(-50%, -50%)");

  const handleMouseEnter = () => {
    setIsHovering(true);
    setTransform("translate(-50%, -60%)");
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform("translate(-50%, -50%)");
  };

  return (
    <>
      {isMobile ? (
        <div
          className="flex mx-auto max-w-screen-sm h-full text-center p-12 md:p-24 items-center content-center"
        >
          <div></div>
          <div className="w-full ">
            <img className="h-full w-full" src="/w_crib-network.svg" />   
              <>
                <h3 className="mt-20 text-white uppercase font-bold">Brands</h3>
                <BrandLogos />
              </>    
          </div>
        </div>
      ) : (
        <div
          className="flex mx-auto max-w-screen-sm h-full text-center p-12 md:p-24 items-center content-center"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <div></div>
          <div className="w-full ">
            <img className="h-full w-full" src="/crib_w_.svg" />
            {isHovering && (
              <>
                <h3 className="mt-20 text-white uppercase font-bold">Our Network</h3>
                <BrandLogos />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
