import React, { useState } from "react";
import ListItem from "./ListItem";
import FeedbackBanner from "./FeedbackBanner";
import AddItemForm from "./AddItemForm";
import NameForm from "./NameForm";
import Navbar from "./Navbar";

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
      <Navbar 
        type="personForm"
        addPerson={addPerson}
        personEdit={personEdit}
        validInputs={validInputs}
        backToPeopleList={backToPeopleList}
      />
      <div className="form_content">
        <NameForm 
          personName={personName}
          addNameForm={addNameForm}
          setPersonName={setPersonName}
          setAddNameForm={setAddNameForm}
          validPersonName={validPersonName}
        />
        {!addNameForm && (
          <div className="item_container">
            {(errorMsg && items.length !== 0) && (
              <FeedbackBanner type="duplicate_item" toggleErrorMsg={() => setErrorMsg(false)} />
            )}
            {!errorMsg && (
              <AddItemForm 
                addItem={addItem}
                itemName={itemName}
                itemCost={itemCost}
                validItem={validItem}
                setItemCost={setItemCost}
                setItemName={setItemName}
              />
            )}
            {items.length === 0 && <FeedbackBanner type="no_people" />}
            {items.map(el => 
              <ListItem 
                el={el}
                key={el.name}
                itemEditing={itemEditing}
                editItemName={editItemName}
                editItemCost={editItemCost}
                validEditItem={validEditItem}
                setEditItemCost={setEditItemCost}
                setEditItemName={setEditItemName}
                removeItem={() => removeItem(el.name)}
                toggleItemEdit={() => toggleItemEdit(el)}
                setItemEditing={() => setItemEditing(false)}
                saveItemChanges={() => saveItemChanges(el.name)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};