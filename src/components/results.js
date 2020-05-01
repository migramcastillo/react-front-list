import React from "react";

const Results = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
};

export default Results;
