import React, { useState, useEffect } from "react";
import ItemPersonForm from "../ItemPersonForm";

const PersonForm = ({ setView, state, addPersonDispatch }) => {
  // set states with hooks for person info
  const [name, setName] = useState("");
  // set error msg state
  const [errorMsg, setErrorMsg] = useState(false);
  const [userItems, setUserItems] = useState([]);
  // validinputs variable
  let validName = name === "" ? false : true;

  // object will keep track of user selected items and its quantities 
  useEffect(() => {
    state.dinner.tally.forEach(el => {
      setUserItems(userItems.push({ name: el.name, qty: 0, isSelected: false }));
    });

    console.log(userItems);
  }, [])

  const toggleItemSelect = (index) => {
    setUserItems(...userItems, userItems[index].isSelected: !userItems[index].isSelected);
  }



  // person obj
  // { name: 'joe', items: [{name: boneless, qty:2}] }

  let validInputs = validName;

  const addPerson = (e) => {
    e.preventDefault();

    let personIsDuplicate = state.people.loggedPersons.filter(el => el.name === name).length === 0 ? false : true;

    if (personIsDuplicate) {
      setErrorMsg(true);
    } else {
      const newPerson = {
        name
      };


  
      addPersonDispatch(newPerson);
      setView("peopleList");
    }
  }

  return (
    <React.Fragment>
      <h1>Person Form</h1>
      <form>
        ENTER PERSON NAME:
        <input 
          type="text" 
          value={name} 
          placeholder="Person Name" 
          onChange={(e) => setName(e.target.value)}
        />
        <br/>

        <h3>CHECK ITEMS CONSUMED</h3>

        {state.dinner.tally.map((el, index) => {
          // revisar este condicional, si usuario selecciona todos los qty se borrarac
          return el.qty !== 0 ?   
            <ItemPersonForm 
              key={index} 
              name={el.name} 
              quantity={el.qty} 
              toggleItemSelect={(index) => toggleItemSelect(index)}
            />
            :
            null
          })}

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
            AN ITEM WITH THAT NAME IS ALREADY LOGGED
          </h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default PersonForm;