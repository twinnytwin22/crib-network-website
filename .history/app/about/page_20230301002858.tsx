import React from "react";
import AboutCopy from "ui/About/AboutCopy";
import ServiceList from "ui/About/ServiceList";
import BrandLogos from "ui/brand-icons";

function About() {
  return (
    <div className="h-screen-xl mx-auto px-8">
      <div className="flex h-full items-center content-center overflow-y-auto overflow-x-clip z-30 mx-auto wi">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-md md:max-w-7xl md:p-4  items-center">
          <div className="mt-96 xs:mt-96 md:mt-0">
            <h1 className="text-xl font-extrabold uppercase">
              What we actually do.
            </h1>
            <div>
            <AboutCopy/>
            <hr className="m-8"/>
            <div className="flex max-w-sm mx-auto">
            <BrandLogos/></div>
              </div>
            
          </div>
          <div className="mb-12">
          <ServiceList/></div>
        </div>
      </div>
    </div>
  );
}

export default About;
