import React from "react";
const ServiceCard = (props: any) => {

  return (
    <table className="border p-4 hover:shadow-2xl hover:scale-105">
      <thead className="bg-gray-800 text-xs md:text-md font-bold text-white text-center p-1 border">
        <tr>
          <th>{props.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-gray-300 p-3 leading-snug">
          <td className="p-4 text-sm md:text-md">{props.description}</td>
          <td>{props.brand}</td>
        </tr>
      
      </tbody>
    </table>
  );
};

export default ServiceCard;
