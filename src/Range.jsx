import React from "react";
import "@eslint/js"


const Range = () => {
  let unitRanges =[
  { range: "0 - 100", amount: "Free" },
  { range: "101 - 200", amount: "₹2.25 / unit" },
  { range: "201 - 400", amount: "₹4.50 / unit" },
  { range: "401 - 500", amount: "₹6.00 / unit" },
  { range: "501 - 600", amount: "₹8.00 / unit" },
  { range: "601 - 800", amount: "₹9.00 / unit" },
  { range: "801 - 1000", amount: "₹10.00 / unit" },
  { range: "Above 1000", amount: "₹11.00 / unit" },
];

  

  return (
    <div className="container mt-4">
      <h2 className="text text-center mb-3">Electricity Unit Charges</h2>


      <table className="table table-bordered rounded table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Unit Range</th>
            <th>Payment</th>
          </tr>
        </thead>

        <tbody>
          {unitRanges.map((item, index) => (
            <tr key={index}>
              <td>{item.range}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>

  );
};

export default Range;