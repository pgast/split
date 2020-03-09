import React from "react";

export default function ResultsPersonsList({ 
  person, 
  difference, 
  personDetail, 
  costPerPerson, 
  expensePerPerson, 
  personDetailsToggle, 
  }) {
  const isExpanded = personDetail === person.name;
  const personIsOwed = expensePerPerson > costPerPerson;
  
  return (
    <div 
      onClick={personDetailsToggle} 
      className={isExpanded ? "list_item list_item--show" : "list_item"}
    >
      <div className="results__person-card__info-row">
        <div className="results__person-card__info--name">
          {person.name.charAt(0).toUpperCase() + person.name.substring(1)} 
        </div>
        <div className={personIsOwed ? "results__person-card__info--status--is-owed" : "results__person-card__info--status"}>
          {personIsOwed ? "IS OWED" : "OWES"}  $ {difference}
        </div>
        <i className={isExpanded ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
      </div>


      {isExpanded && (
        <>
          <h3>{expensePerPerson} - paid</h3>
          <ol>
            {person.items.map(item => <li key={item.name}>{item.name} - {item.cost}</li>)}
          </ol>
        </>
      )}
    </div>
  );
};
