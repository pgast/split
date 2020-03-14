import React from "react";
import Person from "./Person";
import Navbar from "./Navbar";

export default function PeopleList({ setView, landing, data, deletePerson, editPerson }) {
  const validLoggedPersons = data.people.loggedPersons.length >= 1 ? true : false;
  return (
    <div className="view-container people-list">
      <Navbar 
        type="peopleList"
        landing={() => landing()}
        setView={() => setView("resultsView")}
        validLoggedPersons={validLoggedPersons}
      />
      <div className="people-list__content-container">
        {validLoggedPersons && (
          <div className="people-list__content-container--people">
            {data.people.loggedPersons.map(el => 
              <Person 
                data={el}
                key={el.name}
                editPerson={editPerson}
                deletePerson={deletePerson}
                setView={() => setView("personEdit")}
              /> 
            )}
          </div>
        )}
        <div 
          onClick={() => setView("personForm")}
          className={validLoggedPersons ? "button add-person-btn add-person-btn-bottom" : "button add-person-btn"} 
        >
          <h3>Add Person</h3>
        </div>
      </div>
    </div>
  );
};