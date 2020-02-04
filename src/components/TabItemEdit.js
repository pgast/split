import React, { useState } from "react";

const TabItemEdit = ({ setView, itemToEdit, addDispatch, state }) => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [itemQty, setItemQty] = useState(itemToEdit.qty);
  const [itemName, setItemName] = useState(itemToEdit.name);
  const [costInBulk, setCostInBulk] = useState(itemToEdit.userInputCost);
  const [cost, setCost] = useState(itemToEdit.userInputCost === 'bulk' ? itemToEdit.cost : itemToEdit.indCost);

  let prevItemCopy = {...itemToEdit};
  let validCost = cost <= 0 ? false : true;  
  let validItemQty = itemQty <= 0 ? false : true;
  let validItemName = itemName === "" ? false : true;
  let validInputs = validItemName && validCost && validItemQty;

  const backToList = () => {
    addDispatch(prevItemCopy);
    setView("tabList");
  }

  const updateItem = (e) => {
    e.preventDefault();

    let itemIsDuplicate = state.dinner.items.filter(el => el.name === itemName).length === 0 ? false : true;
    let indCost, bulkCost;

    if (itemIsDuplicate) {
      setErrorMsg(true);
    } else {
      if (costInBulk === "bulk") {
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
        userInputCost: costInBulk
      };
  
      addDispatch(newItem);
      setView("tabList");
    }
  }

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

      <h2 onClick={() => backToList()}>BACK TO LIST</h2>

       {/* 
          ERROR MESSAGE COMPONENT IN CASE OF DUPLICATION 
          WORK ON SOLUTION THAT ERROR MESSAGE DISAPPEARS IF USER TYPES DIFFERENT THING
       */}
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

export default TabItemEdit;