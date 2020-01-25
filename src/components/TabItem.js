// DINNER OR EVENT MODE
// GETS INFO FROM STATE
import React from "react";

const TabItem = ({ data }) => {
  return (
    <div style={{ background: "gray" }}>
      <h5>
        {data.name}
      </h5>
      Quantity: {data.qty}
      Cost per Item: {data.indCost}
      Total Cost: {data.cost}
    </div>
  );
};

export default TabItem;