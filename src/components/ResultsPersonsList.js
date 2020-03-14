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
    "results-persons-list__card-info--expanded" :
    (personIsOwed ? 
      "results-persons-list__card-info--is-owed" :
      "results-persons-list__card-info"
    );  
  
  return (
    <div 
      onClick={personDetailsToggle} 
      className={isExpanded ? "list-item list-item--show" : "list-item list-item__person--results"}
    >
      <div className={isExpanded ? 
        "results-persons-list__card-info__row results-persons-list__card-info__row--expanded" : 
        "results-persons-list__card-info__row"
      }>
        <div className={isExpanded ? 
          "results-persons-list__card-info__name results-persons-list__card-info__name--expanded" : 
          "results-persons-list__card-info__name"
        }>
          {person.name.charAt(0).toUpperCase() + person.name.substring(1)} 
        </div>
        <div className={personDebtClass}>
          {personIsOwed ? "IS OWED" : "OWES"}  ${difference}
        </div>
        <i className={isExpanded ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
      </div>
      {isExpanded && (
        <div className="results-persons-list__card--expanded__info--content">
          <div className="results-persons-list__card--expanded__info--paid">PAID ${expensePerPerson}</div>
          {person.items.map(item => (
            <div key={item.name} className="results-persons-list__card--expanded__info--items">
              {item.name.charAt(0).toUpperCase() + item.name.substring(1)}  -  ${item.cost}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
