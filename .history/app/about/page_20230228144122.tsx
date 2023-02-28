import React from "react";
import AboutCopy from "ui/About/AboutCopy";
import ServiceList from "ui/About/ServiceList";

function About() {
  return (
    <div className="h-[78vh] mx-auto overflow-auto">
      <div className="flex h-full items-center content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-md md:max-w-7xl md:p-0 items-center">
          <div>
            <h1 className="text-xl font-extrabold uppercase">
              What we actually do.
            </h1>
            <AboutCopy />
            <hr className="m-8"/>
          </div>

          <ServiceList />
        </div>
      </div>
    </div>
  );
}

export default About;
