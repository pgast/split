import React from "react";

export default function Person({ data, editPerson, deletePerson, setView }) {
  const editCurrentPerson = (item) => {
    setView();
    editPerson(item);
  };

  return (
    <div className="list-item">
      <div className="list-item__text-container">
        <span className="list-item__text--bold">
          {data.name.charAt(0).toUpperCase() + data.name.substring(1)} 
        </span>
        <span>
          {data.items.length} {data.items.length > 1 ? "items" : "item"}
        </span>
      </div>
      <div className="list-item__button-container">
        <div className="button person-btn" onClick={() => editCurrentPerson(data.name)}>
          Edit
        </div>
        <div className="button person-btn" onClick={() => deletePerson(data.name)}>
          <i class="fa fa-times"></i>
        </div>
      </div>
    </div>
  );
};