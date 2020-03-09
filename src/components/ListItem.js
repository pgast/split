import React from "react";

export default function ListItem({
  el, 
  removeItem, 
  itemEditing, 
  editItemName, 
  editItemCost,
  validEditItem,
  setItemEditing, 
  toggleItemEdit, 
  setEditItemName, 
  setEditItemCost, 
  saveItemChanges, 
}) {
  return (
    <div className={itemEditing !== el.name ? "list_item" : "list_item list_item_editing"}>
      {/* WHEN ITEM EDITING IS FALSE */}
      {itemEditing !== el.name && (
        <>
          <div className="list_item_text_container">
            <span>
              {el.name.charAt(0).toUpperCase() + el.name.substring(1)} 
            </span>
            <span className="list_item_text_bold">
              ${el.cost}
            </span>
          </div>
          <div className="list_item_btn_container">
            <div className="list_item_btn" onClick={toggleItemEdit}>Edit</div>
            <div className="list_item_btn" onClick={removeItem}>
              <i class="fa fa-times"></i>
            </div>
          </div>
        </>
      )}

      {/* WHEN ITEM EDITING IS TRUE DISPLAY THIS */}
      {itemEditing === el.name && (
        <>
          <div className="list_item_input_container">
            <input 
              type="text" 
              value={editItemName} 
              placeholder="Item Name" 
              onChange={(e) => setEditItemName(e.target.value)}
            />
            <input 
              type="number" 
              value={editItemCost} 
              placeholder="Cost" 
              onChange={(e) => setEditItemCost(e.target.value)}
            />
          </div>
          <div className="list_item_btn_container">
            <div 
              className={validEditItem ? "edit_list_item_btn" : "edit_list_item_btn edit_list_item_btn_disabled" }
              onClick={validEditItem ? saveItemChanges : null}
            >
              Save
            </div>
            <div 
              className="edit_list_item_btn" 
              onClick={setItemEditing}
              >
                Cancel
              </div>
          </div>
        </>
      )}
    </div>
  );
};