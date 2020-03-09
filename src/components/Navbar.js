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
          <div className="back-btn" onClick={backToPeopleList}>
            <i class="fa fa-chevron-left"></i>
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
            <i class="fa fa-chevron-left"></i>
          </div>
          <div 
            className={validLoggedPersons ? "get-result-btn" : "get-result-btn-disabled"}
            onClick={() => validLoggedPersons ? setView("resultsView") : null}
          >
            GET RESULT
          </div>
        </div>
      )}

      {type === "resultsView" && (
        <div className="navbar navbar--results">
          <div className="results-btn results-btn--back" onClick={backToPeopleList}>
            <i class="fa fa-chevron-left"></i>
          </div>
          <div className="results-btn" onClick={reset}>
            Start Again
          </div>
      </div> 
      )}
    </>
  );
};