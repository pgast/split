import React, { useState } from "react";

const btnStyle = {
  backgroundColor: "white"
};

const ItemPersonForm = ({ name, quantity, isSelected, toggleItemSelect }) => {
  const [qty, setQty] = useState(1);

  const increaseQty = (e) => {
    e.preventDefault();
    if (qty < quantity) setQty(qty + 1);
  };

  const decreaseQty = (e) => {
    e.preventDefault();
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div
      style={{ 
        background: isSelected ? "lightgreen" : null,
        border: isSelected ? null : "1px dashed black", 
        padding: '11px',
        width: '166px', 
        margin: '4px' 
      }}
    >
      <h3 onClick={() => toggleItemSelect()}>{name}</h3> 
      {isSelected && (
        <div style={{ background: "black", flexDirection: 'row', color: 'white', display: 'flex', justifyContent: 'space-around', height: '44px' }}>
          <button onClick={(e) => increaseQty(e)} style={btnStyle}>+</button>
          <h4>{qty}</h4>
          <button onClick={(e) => decreaseQty(e)} style={btnStyle}>-</button>
        </div>
      )}
    </div>
  );
};

export default ItemPersonForm;