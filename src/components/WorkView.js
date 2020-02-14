import React, { useState, useContext } from "react";
import ResultsView from "./ResultsView";
import PeopleList from "./PeopleList";
import PersonForm from "./PersonForm";
import { Store } from "../Store";

const WorkView = ({ toggleMode, data }) => {
  const [view, setView] = useState("peopleList");

  const { dispatch } = useContext(Store);
  const addPerson = (person) => dispatch({ type: "ADD_PERSON", payload: person });

  // GO TO PERSON LIST, ADD PERSONS AND DELETE PERSONS
  
  // PERSON EDIT FORM
  // ADD PERSON FORM

  // RESULTS

  return (
    <>
      <h1>
        WORK VIEW
      </h1>

      {view === "peopleList" && (
        <PeopleList setView={setView} landing={() => toggleMode("landing")} data={data}/>
      )}  


      {view === "resultsView" && (
        <ResultsView setView={setView} landing={() => toggleMode("landing")} data={data}/>
      )}
      {view === "personEdit" && (
        <PersonForm setView={setView} state={data} addPersonDispatch={addPerson} personEdit personToEdit={data.people.personToEdit}/>
      )}

      {view === "personForm" && (
        <PersonForm setView={setView} state={data} addPersonDispatch={addPerson} personEdit={false} personToEdit={false}/>
      )}
    </>
  );
};

export default WorkView;