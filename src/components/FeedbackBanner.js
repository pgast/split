import React from "react";

export default function FeedbackBanner({ type, toggleErrorMsg }) {
  return (
    <>
      {type === "duplicate_item" && (
        <div className="add_item_form">
          <h2>
            A PERSON or item WITH THAT NAME IS ALREADY LOGGED
          </h2>
          <button onClick={toggleErrorMsg}>OK</button>
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