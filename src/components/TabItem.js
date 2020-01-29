// DINNER OR EVENT MODE
// GETS INFO FROM STATE
import React from "react";

const TabItem = ({ data, deleteItem, setView, editItem }) => {
  const editTabItem = (item) => {
    setView();
    editItem(item);
  }

  return (
    <div style={{ background: "gray" }}>
      <h5>
        {data.name}
      </h5>
      Quantity: {data.qty}
      Cost per Item: {data.indCost}
      Total Cost: {data.cost}
      <button onClick={() => deleteItem(data.name)}>
        DELETE
      </button>
      <button onClick={() => editTabItem(data.name)}>
        EDIT
      </button>
    </div>
  );
};

export default TabItem;