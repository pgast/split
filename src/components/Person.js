import React from "react";

export default function Person({ data, editPerson, deletePerson, setView }) {
  const editCurrentPerson = (item) => {
    setView();
    editPerson(item);
  }

  return (
    <div style={{ background: 'cyan' }}>
      <h4>{data.name}</h4>
      <h5>{data.items.length} items.</h5>
      <button onClick={() => deletePerson(data.name)}>
        DELETE
      </button>
      <button onClick={() => editCurrentPerson(data.name)}>
        EDIT
      </button>
    </div>
  );
};