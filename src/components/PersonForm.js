import React, { useState } from "react";

export default function PersonForm({ setView, state, addPersonDispatch, personEdit, personToEdit }) {
  const [personName, setPersonName] = useState(personEdit ? personToEdit.name : "");
  const [items, setItems] = useState(personToEdit ? personToEdit.items : []);
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [editItemName, setEditItemName] = useState("");
  const [editItemCost, setEditItemCost] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [itemEditing, setItemEditing] = useState(false);
  // const [addNameForm, setAddNameForm] = useState(personEdit ? false : true);
  const [addNameForm, setAddNameForm] = useState(true);

  let validPersonName = personName === "" ? false : true;
  let validItems = items.length !== 0 ? true : false;
  let validItem = itemName !== "" && (itemCost !== "" && itemCost > 0);
  let validEditItem = editItemName !== "" && (editItemCost !== "" && editItemCost > 0);
  let validInputs = validPersonName && validItems;

  let itemIsDuplicate = items.filter(el => el.name === itemName).length === 0 ? false : true;
  let personIsDuplicate = state.people.loggedPersons.filter(el => el.name === personName).length === 0 ? false : true;

  const addPerson = (e) => {
    e.preventDefault();

    if(personIsDuplicate) {
      setErrorMsg(true);
    } else {
      const newPerson = {
        name: personName,
        items
      };
      addPersonDispatch(newPerson);
      setView("peopleList");
    };
  };

  const addItem = (e) => {
    e.preventDefault();

    if(itemIsDuplicate) {
      setErrorMsg(true);
    } else {
      if(errorMsg) setErrorMsg(false);
      let newItem = {
        name: itemName,
        cost: itemCost
      };
  
      let newItems = [...items];
      newItems.push(newItem);
  
      setItems(newItems);
      setItemName("");
      setItemCost("");
    };
  };

  const removeItem = (item) => {
    let newItems = [...items];
    newItems = newItems.filter(el => el.name !== item);
    setItems(newItems);
  };

  const toggleItemEdit = (item) => {
    setEditItemName(item.name);
    setEditItemCost(item.cost);
    setItemEditing(item.name);
  };

  const saveItemChanges = (item) => {
    if(itemIsDuplicate) {
      setErrorMsg(true);
    } else {
      let newItems = [...items];
      newItems = newItems.filter(el => el.name !== item);
      const updatedItem = { name: editItemName, cost: editItemCost };
      newItems.push(updatedItem);
      setItems(newItems);
      setItemEditing(false);
    };
  };

  const backToPeopleList = () => {
    if(personEdit) {
      addPersonDispatch(personToEdit);
    };
    setView("peopleList") 
  };

  return (
    <div className="personForm_container">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="back-btn" onClick={backToPeopleList}>
          {'<'}
        </div>
        <div 
          onClick={(e) => validInputs ? addPerson(e) : null}
          className={validInputs ? "get-result-btn" : "get-result-btn-disabled"} 
        >
          {personEdit ? "SAVE CHANGES" : "ADD PERSON"}
        </div>
      </div>


      {/* FORM CONTENT */}
      <div className="form_content">
        <div className={addNameForm ? "form_add_name_full" : "form_add_name_small"}>
          <div className="name_input">
            <input 
              type="text" 
              value={personName} 
              placeholder="Add person name" 
              onChange={(e) => setPersonName(e.target.value)}
            />
          </div>
          {addNameForm && (
            <div className="add-person-btn" onClick={() => setAddNameForm(false)}>
              <h3>Add Items</h3>
            </div>
          )}
        </div>

        {/* ADD ITEM FORM, ITEM LIST AND ERROR MESSAGE*/}
        {!addNameForm && (
          <div className="item_container">
            <div className="add_item_form">
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
              <button onClick={(e) => addItem(e)} style={{ background: "black", color: "white" }} disabled={!validItem}>ADD ITEM</button>
            </div>

            {/* add conditional rendering for list container */}
            {items.map(el => 
              <div key={el.name} style={{background: "gray", margin: "42px"}}>

                {itemEditing !== el.name && (
                  <span>{el.name} - ${el.cost}</span>
                )}

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

                {itemEditing !== el.name && <h5 onClick={() => removeItem(el.name)}>DELETE</h5>}
                {itemEditing !== el.name && <h5 onClick={() => toggleItemEdit(el)}>EDIT</h5>}

                {itemEditing === el.name && <h5 onClick={() => saveItemChanges(el.name)}>SAVE CHANGES</h5>}
                {itemEditing === el.name && <h5 onClick={() => setItemEditing(false)}>GO BACK</h5>}
              </div>
            )}
            {/* conditional rendering end */}

          {/* </form> */}
          {/* /* ERROR MESSAGE COMPONENT IN CASE OF DUPLICATION */}
            {errorMsg && (
              <div style={{background: "orange"}}>
                <h2>
                  A PERSON or item WITH THAT NAME IS ALREADY LOGGED
                </h2>
              </div>
            )}
          </div>
        )}

      {/* FORM CONTENT ENDS */}
      </div>
    {/* PERSON FORM CONTAINER */}
    </div>
  );
};