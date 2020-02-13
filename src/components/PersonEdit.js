import React, { useState } from "react";

const PersonEdit = ({ setView, personToEdit, state, addPersonDispatch }) => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [name, setName] = useState(personToEdit.name);

  let prevPersonCopy = {...personToEdit};
 
  let validName = name === "" ? false : true;
  let validInputs = validName;
  
  const backToList = () => {
    addPersonDispatch(prevPersonCopy);
    setView("peopleList");
  }

  const updatePerson = (e) => {
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
    <>
      <h5>
        PERSON EDIT
      </h5>
      <form>
        PERSON NAME:
        <input 
          type="text" 
          value={name} 
          placeholder="Person name" 
          onChange={(e) => setName(e.target.value)}
        />
        <br/>

        <button type="submit" onClick={(e) => updatePerson(e)} disabled={!validInputs}>
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
            A PERSON WITH THAT NAME IS ALREADY LOGGED
          </h2>
        </div>
      )}
    </>
  );
};

export default PersonEdit;