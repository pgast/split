import React from "react";

const Person = ({ data, editPerson, deletePerson, setView }) => {
  const editCurrentPerson = (item) => {
    setView();
    editPerson(item);
  }

  return (
    <div style={{ background: 'cyan' }}>
      <h5>
        {data.name}
      </h5>
      <button onClick={() => deletePerson(data.name)}>
        DELETE
      </button>
      <button onClick={() => editCurrentPerson(data.name)}>
        EDIT
      </button>
    </div>
  );
};

export default Person;