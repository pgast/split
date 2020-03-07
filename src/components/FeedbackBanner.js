import React from "react";

export default function FeedbackBanner({ type, toggleErrorMsg }) {
  return (
    <>
      {type === "duplicate_item" && (
        <div className="banner_duplicate_item">
          <div className="banner_duplicate_item_text">
              An item with that name already exists, try a different name
          </div>
          <div 
            onClick={toggleErrorMsg} 
            className="add-item-btn banner_duplicate_item_btn"
          >
            Ok
          </div>
        </div>
      )}


      {type === "no_people" && (
        <div className="banner_no_people">
          <h3>No Items</h3>
          <h4>Start adding using the form above</h4>
        </div>
      )}
    </>
  );
};