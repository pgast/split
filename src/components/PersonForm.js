import React, { useState } from "react";
import Navbar from "./Navbar";
import NameForm from "./NameForm";
import ListItem from "./ListItem";
import AddItemForm from "./AddItemForm";
import FeedbackBanner from "./FeedbackBanner";

export default function PersonForm({ setView, state, addPersonDispatch, personEdit, personToEdit }) {
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [editItemName, setEditItemName] = useState("");
  const [editItemCost, setEditItemCost] = useState("");
  const [itemEditing, setItemEditing] = useState(false);
  const [addNameForm, setAddNameForm] = useState(personEdit ? false : true);
  const [items, setItems] = useState(personToEdit ? personToEdit.items : []);
  const [personName, setPersonName] = useState(personEdit ? personToEdit.name : "");

  let validItems = items.length !== 0 ? true : false;
  let validPersonName = personName === "" ? false : true;
  let validItem = itemName !== "" && (itemCost !== "" && itemCost > 0);
  let validEditItem = editItemName !== "" && (editItemCost !== "" && editItemCost > 0);
  let validInputs = validPersonName && validItems;
  let itemIsDuplicate = items.filter(el => el.name === itemName).length === 0 ? false : true;
  let personIsDuplicate = state.people.loggedPersons.filter(el => el.name === personName).length === 0 ? false : true;

  const addPerson = (e) => {
    e.preventDefault();
    if(personIsDuplicate) {
      setErrorMsg("duplicatePerson");
    } else {
      const newPerson = { name: personName, items };
      addPersonDispatch(newPerson);
      setView("peopleList");
    };
  };

  const addItem = (e) => {
    e.preventDefault();
    if(itemIsDuplicate) {
      setErrorMsg("duplicateItem");
    } else {
      if(errorMsg) setErrorMsg(false);
      let newItem = { name: itemName, cost: itemCost };
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
      setErrorMsg("duplicateItem");
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
    if(personEdit) { addPersonDispatch(personToEdit) };
    setView("peopleList") 
  };

  return (
    <div className="view-container person-form">
      <Navbar 
        type="personForm"
        addPerson={addPerson}
        personEdit={personEdit}
        validInputs={validInputs}
        backToPeopleList={backToPeopleList}
      />
      <div className="person-form__content">
        <NameForm 
          personName={personName}
          addNameForm={addNameForm}
          setPersonName={setPersonName}
          setAddNameForm={setAddNameForm}
          validPersonName={validPersonName}
          personIsDuplicate={personIsDuplicate}
        />
        {!addNameForm && (
          <div className="person-form__content__items-container">
            {(errorMsg === "duplicateItem" && items.length !== 0) && (
              <FeedbackBanner type={errorMsg} toggleErrorMsg={() => setErrorMsg(false)} />
            )}
            {errorMsg === "duplicatePerson" && (
              <FeedbackBanner type={errorMsg} toggleErrorMsg={() => setErrorMsg(false)} />
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