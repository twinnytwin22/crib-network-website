"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import services from "./services";
const ServiceList = () => {
  const srv = services();
  console.log(srv);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {srv.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              description={service.description}
              brand={service.brand}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
