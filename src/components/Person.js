import React from "react";

export default function Person({ data, editPerson, deletePerson, setView }) {
  const editCurrentPerson = (item) => {
    setView();
    editPerson(item);
  }

  return (
    <div className="list_item">
      <div className="list_item_text_container">
        <span className={"list_item_text_bold"}>
          {data.name} 
        </span>
        <span>
          {data.items.length} items
        </span>
      </div>
      <div className="list_item_btn_container">
        <div className="list_item_btn" onClick={() => editCurrentPerson(data.name)}>Edit</div>
        <div className="list_item_btn" onClick={() => deletePerson(data.name)}>Delete</div>
      </div>
    </div>
  );
};