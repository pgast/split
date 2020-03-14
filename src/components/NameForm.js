import React, { useEffect } from "react";

export default function NameForm({ addNameForm, personName, setPersonName, validPersonName, setAddNameForm, personIsDuplicate }) {
  let textInput = null;
  useEffect(() => { textInput.focus() }, []);

  return (
    <div className={addNameForm ? "name-form--full" : "name-form--small"}>
      <div className="name-form__input-container">
        <div className={addNameForm ? "name-form__input__name-message" : "name-form__input__name-message--small"}>
          {addNameForm ? 
            (personIsDuplicate ? "That name already exists" : "Who bought this items?") :
            "Adding items bought by"
          }
        </div>
        <input 
          type="text" 
          value={personName} 
          placeholder="Add person name" 
          ref={(text) => { textInput = text; }}
          onChange={(e) => setPersonName(e.target.value)}
          className={addNameForm ? 
            (personIsDuplicate ? "name-form__person-input name-form__person-input--error" : "name-form__person-input") : 
            "name-form__person-input name-form__person-input--small"
          }
        />
      </div>
      {addNameForm && (
        <div 
        onClick={() => (validPersonName && !personIsDuplicate) ? setAddNameForm(false) : null}
        className={(validPersonName && !personIsDuplicate) ? "button add-person-btn" : "button add-person-btn-disabled"} 
        >
          <h3>Add Items</h3>
        </div>
      )}
    </div>
  );
};