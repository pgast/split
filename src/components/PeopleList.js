import React from "react";
import Person from "./Person";
import "../Styles.css";

export default function PeopleList({ setView, landing, data, deletePerson, editPerson }) {
  const validLoggedPersons = data.people.loggedPersons.length >= 1 ? true : false;

  return (
    <div className="peopleListContainer">
{/*  ///////////////////////////////////////////////////////////////////////////////////    */}
{/*  ///////////////////////////////   NAVBAR COMPONENT   //////////////////////////////    */}
      <div className="navbar">
        <div className="back-btn" onClick={() => landing()}>
          {'<'}
        </div>
        <div 
          className={validLoggedPersons ? "get-result-btn" : "get-result-btn-disabled"}
          onClick={() => validLoggedPersons ? setView("resultsView") : null}
        >
          GET RESULT
        </div>
      </div>
{/*  ///////////////////////////////   NAVBAR COMPONENT   //////////////////////////////    */}
{/*  ///////////////////////////////////////////////////////////////////////////////////    */}

      {/* CONTAINER FOR PEOPLE */}
      <div className="content">
        {validLoggedPersons && (
          <div className="people_container">
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
        
        <div className="add-person-btn" onClick={() => setView("personForm")}>
          <h3>Add Person</h3>
        </div>
      </div>
    </div>
  );
};