import React, { useState, useContext } from "react";
import { Store } from "../Store";

const TabItemForm = ({ setView }) => {
  const [priceInBulk, setPriceInBulk] = useState(undefined);
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState(1);
  const [cost, setCost] = useState(undefined);

  const { dispatch } = useContext(Store);
  const addDispatch = (item) => dispatch({ type: 'ADD_TAB_ITEM', payload: item });

  const addItem = (e) => {
    e.preventDefault();
    let indCost, bulkCost;

    if (priceInBulk) {
      indCost = cost / itemQty;
      bulkCost = cost;
    } else {
      bulkCost = cost * itemQty;
      indCost = cost;
    }

    const newItem = {
      qty: itemQty,
      indCost,
      name: itemName,
      cost: bulkCost,
    };

    console.log(newItem);

    // dispatch new item info and add to state in store
    addDispatch(newItem);
    // send back to tab list
    setView("tabList");
    // ver si se borro local state de este componente o si no borrarlo
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
          onChange={() => setPriceInBulk(true)}
        />
            Per bulk
        <input 
          type="radio" 
          name="costType"
          onChange={() => setPriceInBulk(false)} 
        />
          Per item

        {priceInBulk !== undefined && (
          <input 
            value={cost} 
            type="number" 
            placeholder="Item cost" 
            onChange={(e) => setCost(Number(e.target.value))}
          />
        )}


        <button type="submit" onClick={(e) => addItem(e)}>
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

// error boundary tab item form