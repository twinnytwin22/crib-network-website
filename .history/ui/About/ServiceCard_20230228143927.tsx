"use client";
import React from "react";
const ServiceCard = (props: any) => {
  console.log(props, "props");
  return (
    <table className="border p-4">
      <thead className="bg-gray-800 text-md font-bold text-white uppercase text-center p-1 border">
        <tr>
          <th>{props.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-white p-3 leading-snug">
          <td className="p-1">{props.description}</td>
          <td>{props.brand}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ServiceCard;
