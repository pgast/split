import React from "react";

export default function Navbar({ 
  type ,
  reset,
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
          <div className="button back-btn" onClick={backToPeopleList}>
            <i class="fa fa-chevron-left"></i>
          </div>
          <div 
            onClick={(e) => validInputs ? addPerson(e) : null}
            className={validInputs ? "button get-result-btn" : "button get-result-btn-disabled"} 
          >
            {personEdit ? "SAVE CHANGES" : "ADD PERSON"}
          </div>
        </div> 
      )}
      {type === "peopleList" && (
        <div className="navbar">
          <div className="button back-btn" onClick={() => landing()}>
            <i class="fa fa-chevron-left"></i>
          </div>
          <div 
            className={validLoggedPersons ? "button get-result-btn" : "button get-result-btn-disabled"}
            onClick={() => validLoggedPersons ? setView("resultsView") : null}
          >
            GET RESULT
          </div>
        </div>
      )}
      {type === "resultsView" && (
        <div className="navbar navbar--results">
          <div className="button results-btn results-btn--back" onClick={backToPeopleList}>
            <i class="fa fa-chevron-left"></i>
          </div>
          <div className="button results-btn" onClick={reset}>
            Start Again
          </div>
      </div> 
      )}
    </>
  );
};