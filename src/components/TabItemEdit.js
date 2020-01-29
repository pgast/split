import React, { useState, useContext } from "react";
import { Store } from "../Store";

const TabItemEdit = ({ setView, itemToEdit }) => {
  const [costInBulk, setCostInBulk] = useState(itemToEdit.userInputCost);
  const [itemName, setItemName] = useState(itemToEdit.name);
  const [cost, setCost] = useState(itemToEdit.userInputCost === 'bulk' ? itemToEdit.cost : itemToEdit.indCost);
  const [itemQty, setItemQty] = useState(itemToEdit.qty);

  const { state, dispatch } = useContext(Store);
  const updateDispatch = (item) => dispatch({ type: 'UPDATE_TAB_ITEM', payload: item });


  const updateItem = (e) => {
    e.preventDefault();
    let indCost, bulkCost;

    if (costInBulk) {
      indCost = cost / itemQty;
      bulkCost = cost;
    } else {
      bulkCost = cost * itemQty;
      indCost = cost;
    }

    const newItem = {
      indCost,
      qty: itemQty,
      name: itemName,
      cost: bulkCost,
      userInputCost: costInBulk ? 'bulk' : 'individual'
    };

    updateDispatch(newItem);
    setView("tabList");
  }

  // TEST
  const back2List = () => {
    console.log('[STATE FROM TAB ITEM EDIT TRIGGERED BY BACK TO LIST]');
    console.log(state);
    setView("tabList");
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
          checked={itemToEdit.userInputCost === 'bulk' ? true : false}
          onChange={() => setCostInBulk('bulk')}
        />
          Per bulk
        <input 
          type="radio" 
          name="costType"
          checked={itemToEdit.userInputCost === 'individual' ? true : false}
          onChange={() => setCostInBulk('individual')} 
        />
          Per item

        <input 
          value={cost} 
          type="number" 
          placeholder="Item cost" 
          onChange={(e) => setCost(Number(e.target.value))}
        />

        {/* CHANGE ADD ITEM TO UPDATEDITEM */}
        <button type="submit" onClick={(e) => updateItem(e)} disabled={!validInputs}>
          SAVE CHANGES
        </button>
      </form>

      {/* <h2 onClick={() => setView("tabList")}>BACK TO LIST</h2> */}
      <h2 onClick={() => back2List()}>BACK TO LIST</h2>
    </React.Fragment>
  );
};

export default TabItemEdit;