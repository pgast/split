import React, { useState } from "react";
import ResultsView from "./ResultsView";
import PeopleList from "./PeopleList";
import PersonForm from "./PersonForm";
import "../Styles.css";

export default function WorkView({ toggleMode, data, addPersonDispatch, deletePersonDispatch, editPersonDispatch }) {
  const [view, setView] = useState("peopleList");

  return (
    <div className="workView">
      {view === "peopleList" && (
        <PeopleList 
          data={data} 
          setView={setView} 
          editPerson={editPersonDispatch}
          deletePerson={deletePersonDispatch} 
          landing={() => toggleMode("landing")} 
        />
      )}  

      {view === "resultsView" && (
        <ResultsView setView={setView} landing={() => toggleMode("landing")} data={data}/>
      )}

      {view === "personEdit" && (
        <PersonForm 
          personEdit 
          state={data} 
          setView={setView} 
          addPersonDispatch={addPersonDispatch} 
          personToEdit={data.people.personToEdit}
        />
      )}

      {view === "personForm" && (
        <PersonForm 
          state={data} 
          setView={setView} 
          personEdit={false} 
          personToEdit={false}
          addPersonDispatch={addPersonDispatch} 
        />
      )}
    </div>
  );
};