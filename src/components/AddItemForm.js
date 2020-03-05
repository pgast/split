import React from "react";

export default function AddItemForm({ itemName, setItemName, itemCost, setItemCost, validItem, addItem }) {
  return (
    <div className="add_item_form">
      <div className="item_form_inputs">
        <input 
          type="text" 
          value={itemName} 
          placeholder="Item" 
          onChange={(e) => setItemName(e.target.value)}
        />
        <input 
          type="number" 
          value={itemCost} 
          placeholder="Cost" 
          onChange={(e) => setItemCost(e.target.value)}
        />
      </div>
      <div 
        onClick={(e) => validItem ? addItem(e) : null} 
        className={validItem ? "add-item-btn" : "add-item-btn-disabled"}
      >
        Add Item
      </div>
    </div>
  );
};