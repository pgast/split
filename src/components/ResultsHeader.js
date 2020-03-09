import React from "react";

export default function ResultsHeader({ totalCost, costPerPerson, viewMode, setViewMode }) {
  return (
    <div className="results-header">
      <div className="results-header__results-text">
        <span className="results-header__results-text--main">
          Total cost <span>${totalCost}</span>
        </span>
        <span className="results-header__results-text--secondary">
          Cost per person <span>${costPerPerson}</span>
        </span>
      </div>
      <div className="results-header__toggle-lists-btns">
        <div
          className={viewMode === "persons" ? "results-btn results-btn--toggle-results results-btn--toggle-results--pressed" : "results-btn results-btn--toggle-results"}
          onClick={viewMode === "persons" ? null : () => setViewMode("persons")}
        >
          PERSONS
        </div>
        <div 
          className={viewMode === "items" ? "results-btn results-btn--toggle-results results-btn--toggle-results--pressed" : "results-btn results-btn--toggle-results"}
          onClick={viewMode === "items" ? null : () => setViewMode("items")}
        >
          ITEMS
        </div>
      </div>
    </div>
  );
};