import React from "react";

export default function ResultsItemsList({ getItemsList, items }) {
  return (
    getItemsList(items).map(item => 
      <div key={item.name} className="list-item">
        <div>
          {item.name.charAt(0).toUpperCase() + item.name.substring(1)} 
        </div>
        <div className="list-item--results__content-container">  
          <div className="list-item--results__item--cost">
            $ {item.cost}
          </div>
          <div className="list-item--results__item--person-name">
            {item.personName.charAt(0).toUpperCase() + item.personName.substring(1)} 
          </div>
        </div>
      </div>
    )
  );
};