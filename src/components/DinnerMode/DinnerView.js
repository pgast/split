import React, { useState, useContext } from "react";
import ResultsView from "../Shared/ResultsView";
import PeopleList from "../Shared/PeopleList";
import TabItemForm from "../TabItemForm";
import TabItemEdit from "../TabItemEdit";
import PersonEdit from "../Shared/PersonEdit";
import PersonForm from "../Shared/PersonForm";
import TabList from "../TabList";
import { Store } from "../../Store";

const DinnerView = ({ toggleMode, data }) => {
  const [view, setView] = useState("tabList");

  const { dispatch } = useContext(Store);
  const addDispatch = (item) => dispatch({ type: 'ADD_TAB_ITEM', payload: item });
  const addPerson = (person) => dispatch({ type: "ADD_PERSON", payload: person });

  return (
    <React.Fragment>
      <h1 onClick={() => console.log(data)}>
        DINNER VIEW
      </h1>
      {view === "tabList" && (
        <TabList setView={setView} landing={() => toggleMode("landing")} data={data}/>
      )}
      {view === "peopleList" && (
        <PeopleList setView={setView} landing={() => toggleMode("landing")} data={data}/>
      )}  
      {view === "resultsView" && (
        <ResultsView setView={setView} landing={() => toggleMode("landing")} data={data}/>
      )}
      {view === "tabItemForm" && (
        <TabItemForm setView={setView} state={data} addDispatch={addDispatch}/>
      )}
      {view === "tabItemEdit" && (
        <TabItemEdit setView={setView} itemToEdit={data.dinner.itemToEdit} state={data} addDispatch={addDispatch}/>
      )}
      {view === "personEdit" && (
        <PersonEdit setView={setView} personToEdit={data.people.personToEdit} state={data} addPersonDispatch={addPerson}/>
      )}
      {view === "personForm" && (
        <PersonForm setView={setView} state={data} addPersonDispatch={addPerson} />
      )}
    </React.Fragment>
  );
};

export default DinnerView;