import React, { useState, useContext } from "react";
import { Store } from "../Store";

const TabItemForm = ({ setView }) => {
  const [costInBulk, setCostInBulk] = useState(undefined);
  const [itemName, setItemName] = useState("");
  const [cost, setCost] = useState(0);
  const [itemQty, setItemQty] = useState(1);

  const { state, dispatch } = useContext(Store);
  const addDispatch = (item) => dispatch({ type: 'ADD_TAB_ITEM', payload: item });

  // if costInBulk is undefined => invalid
  let validCostInBulk = costInBulk === undefined ? false : true;
  // if item name is "" => invalid
  let validItemName = itemName === "" ? false : true;
  // if cost is 0 or less than 0 or undefined => invalid
  let validCost = cost <= 0 ? false : true;  
  // if item qty is 0 or less than 0 => invalid
  let validItemQty = itemQty <= 0 ? false : true;

  let validInputs =  validCostInBulk && validItemName && validCost && validItemQty;

  const addItem = (e) => {
    //  CONSOLE LOG STATE HERE
    console.log('[STATE FROM TAB ITEM FORM ADD ITEM]');
    console.log(state);

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

    addDispatch(newItem);
    setView("tabList");
  }

  return (
    <React.Fragment>
      <h1>
        Tab Item Form
      </h1>
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
          onChange={() => setCostInBulk(true)}
        />
          Per bulk
        <input 
          type="radio" 
          name="costType"
          onChange={() => setCostInBulk(false)} 
        />
          Per item

        {/*STYLING set minimum input to 0 */}
        {costInBulk !== undefined && (
          <input 
            value={cost} 
            type="number" 
            placeholder="Item cost" 
            onChange={(e) => setCost(Number(e.target.value))}
          />
        )}

        <button type="submit" onClick={(e) => addItem(e)} disabled={!validInputs}>
          ADD ITEM
        </button>
      </form>

      <h5 onClick={() => setView("tabList")}>
        Back to list
      </h5>
    </React.Fragment>
  );
};

export default TabItemForm;