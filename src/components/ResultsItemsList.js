import React from "react";

export default function ResultsItemsList({ getItemsList, items }) {
  return (
    getItemsList(items).map(item => 
      <div key={item.name} className="list_item">
        <div>
          {item.name.charAt(0).toUpperCase() + item.name.substring(1)} 
        </div>

        <div className="results__list-item__content-container">  
          <div className="results__list-item__item--cost">
            $ {item.cost}
          </div>
          <div className="results__list-item__item--person-name">
            {item.personName.charAt(0).toUpperCase() + item.personName.substring(1)} 
          </div>
        </div>
      </div>
    )
  );
};