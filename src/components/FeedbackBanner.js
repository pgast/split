import React from "react";

export default function FeedbackBanner({ type, toggleErrorMsg }) {
  return (
    <>
      {(type === "duplicatePerson" || type === "duplicateItem") && (
        <div className="feedback-banner--duplicate-item">
          <div className="feedback-banner--duplicate-item__text">
            {type === "duplicateItem" ? "An item" : "A person"} with that name already exists, try a different name
          </div>
          <div 
            onClick={toggleErrorMsg} 
            className="button add-item-btn banner_duplicate_item_btn"
          >
            Ok
          </div>
        </div>
      )}
      {type === "no_people" && (
        <div className="feedback-banner--no-person">
          <h3>No Items</h3>
          <h4 className="feedback-banner--no-person__text">Start adding using the form above</h4>
        </div>
      )}
    </>
  );
};