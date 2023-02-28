import React from "react";
const ServiceCard = (props: any) => {

  return (
    <table className="border p-4 hover:shadow-2xl hover:-m-3">
      <thead className="bg-gray-800 text-md font-bold text-white uppercase text-center p-1 border">
        <tr>
          <th>{props.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-white p-3 leading-snug">
          <td className="p-4">{props.description}</td>
          <td>{props.brand}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ServiceCard;
