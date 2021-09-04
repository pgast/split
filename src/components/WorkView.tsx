import React, { useState } from "react";
import PeopleList from "./PeopleList";
import PersonForm from "./PersonForm";
import ResultsView from "./ResultsView";
import { StateTypes } from "../Store";

interface Props {
  data: StateTypes,
  resetData: () => void,
  toggleMode: () => void,
  addPersonDispatch: () => void,
  editPersonDispatch: () => void,
  deletePersonDispatch: () => void
}

type Views = "peopleList" | "resultsView" | "personEdit" | "personForm";

export default function WorkView({ 
  data, 
  resetData,
  toggleMode,
  addPersonDispatch, 
  editPersonDispatch, 
  deletePersonDispatch, 
}: Props) {
  const [view, setView] = useState<Views>("peopleList");
  const reset = (): void => {
    resetData();
    toggleMode("landing");
  };

  return (
    <>
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
    </>
  );
};