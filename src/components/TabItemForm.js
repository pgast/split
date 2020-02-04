import React, { useState } from "react";

const TabItemForm = ({ setView, state, addDispatch }) => {
  const [cost, setCost] = useState(0);
  const [itemQty, setItemQty] = useState(1);
  const [itemName, setItemName] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [costInBulk, setCostInBulk] = useState(undefined);

  let validCost = cost <= 0 ? false : true;  
  let validItemQty = itemQty <= 0 ? false : true;
  let validItemName = itemName === "" ? false : true;
  let validCostInBulk = costInBulk === undefined ? false : true;

  let validInputs =  validCostInBulk && validItemName && validCost && validItemQty;

  const addItem = (e) => {
    e.preventDefault();
    let indCost, bulkCost;
    let itemIsDuplicate = state.dinner.items.filter(el => el.name === itemName).length === 0 ? false : true;

    if (itemIsDuplicate) {
      setErrorMsg(true);
    } else {
      if (costInBulk) {
        indCost = (cost / itemQty);
        bulkCost = cost;
      } else {
        bulkCost = (cost * itemQty);
        indCost = cost;
      }
  
      const newItem = {
        indCost: +indCost.toFixed(2),
        qty: +itemQty,
        name: itemName,
        cost: +bulkCost.toFixed(2),
        userInputCost: costInBulk ? 'bulk' : 'individual'
      };
  
      addDispatch(newItem);
      setView("tabList");
    }
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

      {/* ERROR MESSAGE COMPONENT IN CASE OF DUPLICATION */}
      {errorMsg && (
        <div style={{background: "orange"}}>
          <h2>
            AN ITEM WITH THAT NAME IS ALREADY LOGGED
          </h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default TabItemForm;