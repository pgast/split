import React from "react";

export default function Navbar({ 
  type ,
  landing, 
  setView, 
  addPerson, 
  personEdit, 
  validInputs, 
  backToPeopleList, 
  validLoggedPersons, 
}) {
  return (
    <>
      {type === "personForm" && (
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
      )}

      {type === "peopleList" && (
        <div className="navbar">
          <div className="back-btn" onClick={() => landing()}>
            {'<'}
          </div>
          <div 
            className={validLoggedPersons ? "get-result-btn" : "get-result-btn-disabled"}
            onClick={() => validLoggedPersons ? setView("resultsView") : null}
          >
            GET RESULT
          </div>
        </div>
      )}
    </>
  );
};