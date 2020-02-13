import React, { useState } from "react";

// const PersonForm = ({ setView, state, addPersonDispatch }) => {
export default function PersonForm({ setView, state, addPersonDispatch }) {
  const [personName, setPersonName] = useState("");
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState(undefined);
  const [errorMsg, setErrorMsg] = useState(false);

  let validPersonName = personName === "" ? false : true;
  let validItems = items.length !== 0 ? true : false;
  let validItem = itemName !== "" && itemCost !== undefined;
  let validInputs = validPersonName && validItems;


  const addPerson = (e) => {
    e.preventDefault();

    let personIsDuplicate = state.people.loggedPersons.filter(el => el.name === personName).length === 0 ? false : true;

    if (personIsDuplicate) {
      setErrorMsg(true);
    } else {
      const newPerson = {
        name: personName
      };
      addPersonDispatch(newPerson);
      setView("peopleList");
    }
  }

  const addItem = () => {
    let newItem = {
      name: itemName,
      cost: itemCost
    };

    let newItems = [...items];
    newItems.push(newItem);

    setItems(newItems);
    setItemName("");
    setItemCost();
  }

  return (
    <>
      <h1>Person Form</h1>
      <form>
        ENTER PERSON NAME:
        <input 
          type="text" 
          value={personName} 
          placeholder="Person Name" 
          onChange={(e) => setPersonName(e.target.value)}
        />
        <br/>
        <div style={{background: "orange"}}>
          <input 
            type="text" 
            value={itemName} 
            placeholder="Item Name" 
            onChange={(e) => setItemName(e.target.value)}
          />
          <input 
            type="number" 
            value={itemCost} 
            placeholder="Item Cost" 
            onChange={(e) => setItemCost(e.target.value)}
          />
          <button onClick={addItem} style={{ background: "black", color: "white" }} disabled={!validItem}>ADD ITEM</button>
        </div>

        {items.map(el => 
          <div key={el.name}>
            {el.name} - $:{el.cost}
          </div>
        )}






        <button type="submit" onClick={(e) => addPerson(e)} disabled={!validInputs}>
          ADD PERSON
        </button>
      </form>

      <h5 onClick={() => setView("peopleList")}>
        Back to people list
      </h5>

      {/* ERROR MESSAGE COMPONENT IN CASE OF DUPLICATION */}
      {errorMsg && (
        <div style={{background: "orange"}}>
          <h2>
            A PERSON WITH THAT NAME IS ALREADY LOGGED
          </h2>
        </div>
      )}
    </>
  );
};

// export default PersonForm;