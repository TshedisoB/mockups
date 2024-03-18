import React from "react";
import { statement } from "../data/info";

const Statement = () => {
  return (
    <div className="Statement">
      <h3>Personal Statement</h3>
      <div className="Statement-container">
        <p>{statement.value}</p>
      </div>
    </div>
  );
};

export default Statement;
