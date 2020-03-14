import React from "react";

export default function ResultsHeader({ totalCost, costPerPerson, viewMode, setViewMode, setPersonDetail }) {
  const toggleItemsView = () => {
    setViewMode("items");
    setPersonDetail(false);
  };

  return (
    <div className="results-header">
      <div className="results-header__results-text">
        <div className="results-header__results-text--main">
          Total cost <span>${totalCost}</span>
        </div>
        <div className="results-header__results-text--secondary">
          Cost per person <span>${costPerPerson}</span>
        </div>
      </div>
      <div className="results-header__toggle-lists-buttons">
        <div
          className={viewMode === "persons" ? "button results-btn results-btn--toggle-results results-btn--toggle-results--pressed" : "button results-btn results-btn--toggle-results"}
          onClick={viewMode === "persons" ? null : () => setViewMode("persons")}
        >
          PERSONS
        </div>
        <div 
          className={viewMode === "items" ? "button results-btn results-btn--toggle-results results-btn--toggle-results--pressed" : "button results-btn results-btn--toggle-results"}
          onClick={viewMode === "items" ? null : () => toggleItemsView()}
        >
          ITEMS
        </div>
      </div>
    </div>
  );
};