import React from "react";

export default function ListItem({
  el, 
  removeItem, 
  itemEditing, 
  editItemName, 
  editItemCost,
  setItemEditing, 
  toggleItemEdit, 
  setEditItemName, 
  setEditItemCost, 
  saveItemChanges, 
}) {
  return (
    <div className="list_item">
      {/* WHEN ITEM EDITING IS FALSE */}
      {itemEditing !== el.name && (
        <>
          <div className="list_item_text_container">
            {el.name} - ${el.cost}
          </div>
          <div className="list_item_btn_container">
            <div className="get-result-btn list_item_btn" onClick={toggleItemEdit}>Edit</div>
            <div className="get-result-btn list_item_btn" onClick={removeItem}>Delete</div>
          </div>
        </>
      )}

      {/* WHEN ITEM EDITING IS TRUE DISPLAY THIS */}
      {itemEditing === el.name && (
        <>
          <input 
            type="text" 
            value={editItemName} 
            placeholder="Item Name" 
            onChange={(e) => setEditItemName(e.target.value)}
          />
          <input 
            type="number" 
            value={editItemCost} 
            placeholder="Item Cost" 
            onChange={(e) => setEditItemCost(e.target.value)}
          />
        </>
      )}
      {itemEditing === el.name && <h5 onClick={saveItemChanges}>SAVE CHANGES</h5>}
      {itemEditing === el.name && <h5 onClick={setItemEditing}>GO BACK</h5>}
    </div>
  );
};