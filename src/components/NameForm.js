import React, { useEffect } from "react";

export default function NameForm({ addNameForm, personName, setPersonName, validPersonName, setAddNameForm }) {
  let textInput = null;
  useEffect(() => { textInput.focus() }, []);

  return (
    <div className={addNameForm ? "form_add_name_full" : "form_add_name_small"}>
      <div className="name_input_container">
        <div className={addNameForm ? "name_message" : "name_message name_message_small"}>
          {addNameForm ? "Who bought this items?" : "Adding items bought by"}
        </div>
        <input 
          type="text" 
          value={personName} 
          placeholder="Add person name" 
          ref={(text) => { textInput = text; }}
          onChange={(e) => setPersonName(e.target.value)}
          className={addNameForm ? "person_input" : "person_input person_input_small"}
        />
      </div>
      {addNameForm && (
        <div 
        onClick={() => validPersonName ? setAddNameForm(false) : null}
        className={validPersonName ? "add-person-btn" : "add-person-btn-disabled"} 
        >
          <h3>Add Items Bought</h3>
        </div>
      )}
    </div>
  );
};