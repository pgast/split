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
    <div className={itemEditing !== el.name ? "list-item" : "list-item list-item--editing"}>
      {itemEditing !== el.name && (
        <>
          <div className="list-item__text-container">
            <span>
              {el.name.charAt(0).toUpperCase() + el.name.substring(1)} 
            </span>
            <span className="list-item__text--bold">
              ${el.cost}
            </span>
          </div>
          <div className="list-item__button-container">
            <div className="button list-item__btn" onClick={toggleItemEdit}>Edit</div>
            <div className="button list-item__btn" onClick={removeItem}>
              <i className="fa fa-times"></i>
            </div>
          </div>
        </>
      )}
      {itemEditing === el.name && (
        <>
          <div className="list-item__input-container">
            <input 
              type="text" 
              value={editItemName} 
              placeholder="Item Name" 
              className="list-item__input-container__input list-item__input-container__input--text"
              onChange={(e) => setEditItemName(e.target.value)}
            />
            <input 
              type="number" 
              value={editItemCost} 
              placeholder="Cost" 
              className="list-item__input-container__input"
              onChange={(e) => setEditItemCost(e.target.value)}
            />
          </div>
          <div className="list-item__button-container">
            <div 
              className={validEditItem ? "button list-item__button--edit" : "button list-item__button--edit list-item__button--edit--disabled"}
              onClick={validEditItem ? saveItemChanges : null}
            >
              Save
            </div>
            <div 
              className="button list-item__button--edit" 
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