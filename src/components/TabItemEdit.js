import React, { useState, useContext } from "react";
import { Store } from "../Store";

const TabItemEdit = ({ setView, itemToEdit }) => {
  const [costInBulk, setCostInBulk] = useState(itemToEdit.userInputCost);
  const [itemName, setItemName] = useState(itemToEdit.name);
  const [cost, setCost] = useState(itemToEdit.userInputCost === 'bulk' ? itemToEdit.cost : itemToEdit.indCost);
  const [itemQty, setItemQty] = useState(itemToEdit.qty);
  const [errorMsg, setErrorMsg] = useState(false);

  const { state, dispatch } = useContext(Store);
  const updateDispatch = (item) => dispatch({ type: 'UPDATE_TAB_ITEM', payload: item });

  const updateItem = (e) => {
    e.preventDefault();

    // let itemIsDuplicate = state.dinner.items.filter(el => el.name === itemName).length === 0 ? false : true;
    // TAB ITEM EDIT, IF NEW ITEM NAME IS NOT IN ITEMS
    // let test = items.filter(el => el.name === "cow");
// empty array is valid, not empty array is not valid;

    
    // if duplicateItem is false
    // execute this
    let indCost, bulkCost;

    if (costInBulk) {
      indCost = (cost / itemQty).toFixed(2);
      bulkCost = cost;
    } else {
      bulkCost = (cost * itemQty).toFixed(2);
      indCost = cost;
    }

    const newItem = {
      indCost,
      qty: itemQty,
      name: itemName,
      cost: bulkCost,
      userInputCost: costInBulk
    };

    updateDispatch(newItem);
    setView("tabList");
    // else //
      // error message
    //
  }

  let validCostInBulk = costInBulk === undefined ? false : true;
  let validItemName = itemName === "" ? false : true;
  let validItemQty = itemQty <= 0 ? false : true;
  let validCost = cost <= 0 ? false : true;  

  let validInputs =  validCostInBulk && validItemName && validCost && validItemQty;

  return (
    <React.Fragment>
      <form>
        ITEM NAME:
        <input 
          type="text" 
          value={itemName} 
          placeholder="Item name" 
          onChange={(e) => setItemName(e.target.value)}
        />
        <br/>

        QUANTITY:
        {/* STYLING set minimum value to 1*/}
        <input 
          type="number" 
          value={itemQty} 
          placeholder="Quantity" 
          onChange={(e) => setItemQty(e.target.value)}
        />
        <br/>

        COST:
        <input 
          type="radio" 
          name="costType" 
          onChange={() => setCostInBulk('bulk')}
          checked={costInBulk === 'bulk' ? true : false}
        />
          Per bulk
        <input 
          type="radio" 
          name="costType"
          onChange={() => setCostInBulk('individual')} 
          checked={costInBulk === 'individual' ? true : false}
        />
          Per item

        <input 
          value={cost} 
          type="number" 
          placeholder="Item cost" 
          onChange={(e) => setCost(Number(e.target.value))}
        />

        <button type="submit" onClick={(e) => updateItem(e)} disabled={!validInputs}>
          SAVE CHANGES
        </button>
      </form>

      <h2 onClick={() => setView("tabList")}>BACK TO LIST</h2>
    </React.Fragment>
  );
};

export default TabItemEdit;