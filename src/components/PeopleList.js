import React from "react";
import Person from "./Person";
import Navbar from "./Navbar";

export default function PeopleList({ setView, landing, data, deletePerson, editPerson }) {
  const validLoggedPersons = data.people.loggedPersons.length >= 1 ? true : false;
  return (
    <div className="view-container">
      <Navbar 
        type="peopleList"
        landing={() => landing()}
        setView={() => setView("resultsView")}
        validLoggedPersons={validLoggedPersons}
      />
      <div className="content">
        {validLoggedPersons && (
          <div className="people-container">
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
          className={validLoggedPersons ? "add-person-btn add-person-btn-bottom" : "add-person-btn"} 
        >
          <h3>Add Person</h3>
        </div>
      </div>
    </div>
  );
};