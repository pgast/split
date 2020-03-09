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

  const personDebtClass = isExpanded ? 
    "results__person-card__info--status--expanded" :
    (personIsOwed ? 
      "results__person-card__info--status--is-owed" :
      "results__person-card__info--status"
    );  
  
  return (
    <div 
      onClick={personDetailsToggle} 
      className={isExpanded ? "list_item list_item--show" : "list_item list_item-person--results"}
    >
      <div className={isExpanded ? "results__person-card__info-row results__person-card__info-row--expanded" : "results__person-card__info-row"}>
        <div className={isExpanded ? "results__person-card__info--name results__person-card__info--name--expanded" : "results__person-card__info--name"}>
          {person.name.charAt(0).toUpperCase() + person.name.substring(1)} 
        </div>
        <div className={personDebtClass}>
          {personIsOwed ? "IS OWED" : "OWES"}  ${difference}
        </div>
        <i className={isExpanded ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
      </div>

      {isExpanded && (
        <div className="results__person-card--expanded__info-content">
          <div className="results__person-card--expanded__info-paid">PAID ${expensePerPerson}</div>
          {person.items.map(item => (
            <div key={item.name} className="results__person-card--expanded__info-items">
              {item.name.charAt(0).toUpperCase() + item.name.substring(1)}  -  ${item.cost}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
