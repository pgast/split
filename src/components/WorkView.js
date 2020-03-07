import React, { useState } from "react";
import ResultsView from "./ResultsView";
import PeopleList from "./PeopleList";
import PersonForm from "./PersonForm";
import "../Styles.css";

export default function WorkView({ 
  data, 
  resetData,
  toggleMode,
  addPersonDispatch, 
  editPersonDispatch, 
  deletePersonDispatch, 
}) {
  const [view, setView] = useState("peopleList");
  const reset = () => {
    resetData();
    toggleMode("landing");
  };

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
        <ResultsView 
          data={data}
          reset={reset}
          setView={setView} 
        />
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