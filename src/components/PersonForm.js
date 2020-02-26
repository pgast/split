import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function PersonForm({ setView, state, addPersonDispatch, personEdit, personToEdit }) {
  const [personName, setPersonName] = useState(personEdit ? personToEdit.name : "");
  const [items, setItems] = useState(personToEdit ? personToEdit.items : []);
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [editItemName, setEditItemName] = useState("");
  const [editItemCost, setEditItemCost] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [itemEditing, setItemEditing] = useState(false);
  const [addNameForm, setAddNameForm] = useState(personEdit ? false : true);

  let textInput = null;
  useEffect(() => {
    textInput.focus();
  }, []);


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
          <div className="name_input_container">
            <div className="name_message">
              {addNameForm ? "Who bought this items?" : "Adding items bought by"}
            </div>
            <input 
              type="text" 
              value={personName} 
              placeholder="Add person name" 
              className={addNameForm ? "person_input" : "person_input person_input_small"}
              ref={(text) => { textInput = text; }}
              onChange={(e) => setPersonName(e.target.value)}
            />
          </div>
          {addNameForm && (
            <div 
              className={validPersonName ? "add-person-btn" : "add-person-btn-disabled"} 
              onClick={() => validPersonName ? setAddNameForm(false) : null}
            >
              <h3>Add Items Bought</h3>
            </div>
          )}
        </div>

        {/* ADD ITEM FORM, ITEM LIST AND ERROR MESSAGE*/}
        {!addNameForm && (
          <div className="item_container">
            <div className="add_item_form">
              <div className="item_form_inputs">
                <input 
                  type="text" 
                  value={itemName} 
                  placeholder="Item" 
                  onChange={(e) => setItemName(e.target.value)}
                />
                <input 
                  type="number" 
                  value={itemCost} 
                  placeholder="Cost" 
                  onChange={(e) => setItemCost(e.target.value)}
                />
              </div>
              <div 
                onClick={(e) => validItem ? addItem(e) : null} 
                className={validItem ? "add-item-btn" : "add-item-btn-disabled"}
              >
                Add Item
              </div>
            </div>

            {/* add conditional rendering for list container */}
            {items.map(el => 
              <ListItem 
                el={el}
                key={el.name}
                itemEditing={itemEditing}
                editItemName={editItemName}
                editItemCost={editItemCost}
                setEditItemCost={setEditItemCost}
                setEditItemName={setEditItemName}
                removeItem={() => removeItem(el.name)}
                toggleItemEdit={() => toggleItemEdit(el)}
                setItemEditing={() => setItemEditing(false)}
                saveItemChanges={() => saveItemChanges(el.name)}
              />
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