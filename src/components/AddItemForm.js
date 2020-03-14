import React from "react";

export default function AddItemForm({ itemName, setItemName, itemCost, setItemCost, validItem, addItem }) {
  return (
    <div className="add-item-form">
      <div className="add-item-form__inputs">
        <input 
          type="text" 
          value={itemName} 
          placeholder="Item" 
          className="add-item-form__input"
          onChange={(e) => setItemName(e.target.value)}
        />
        <input 
          type="number" 
          value={itemCost} 
          placeholder="Cost"
          className="add-item-form__input add-item-form__input--small" 
          onChange={(e) => setItemCost(e.target.value)}
        />
      </div>
      <div 
        onClick={(e) => validItem ? addItem(e) : null} 
        className={validItem ? "button add-item-btn" : "button add-item-btn-disabled"}
      >
        Add Item
      </div>
    </div>
  );
};