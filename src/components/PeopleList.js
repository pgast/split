import React from "react";
import Person from "./Person";

const styles = {
  flexDirection: "row",
  background: "black",
  color: "white",
  textAlign: "center",
}

export default function PeopleList({ setView, landing, data, deletePerson, editPerson }) {
  return (
    <>
      <h2>
        2. PEOPLE LIST
      </h2>
      <div style={styles}>
        <h6 onClick={() => landing()}>
          LANDING
        </h6>
        <h3 onClick={() => setView("resultsView")}>
          GET RESULTS >>
        </h3>
      </div>

      {data.people.loggedPersons.map(el => 
        <Person 
          data={el}
          key={el.name}
          editPerson={editPerson}
          deletePerson={deletePerson}
          setView={() => setView("personEdit")}
        /> 
      )}

      <button onClick={() => setView("personForm")}>Add Person</button>
    </>
  );
};