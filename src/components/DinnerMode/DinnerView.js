import React, { useState } from "react";
import ResultsView from "../Shared/ResultsView";
import PeopleList from "../Shared/PeopleList";
import TabItemForm from "../TabItemForm";
import TabItemEdit from "../TabItemEdit";
import TabList from "../TabList";

const DinnerView = ({ toggleMode, data }) => {
  const [view, setView] = useState("tabList");

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
        <TabItemForm setView={setView}/>
      )}
      {view === "tabItemEdit" && (
        <TabItemEdit setView={setView} itemToEdit={data.dinner.itemToEdit}/>
      )}
    </React.Fragment>
  );
};

export default DinnerView;

// IF TAB ITEM IS CLICKED IN EDIT
// trigger dispatch with the key of the tab item to be edited
// dispatch triggers a state update that flips editTabItem to true
// if editTabItem is true it will display tabItemForm with the item info to edit