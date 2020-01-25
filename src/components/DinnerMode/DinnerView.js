import React, { useState } from "react";
import ResultsView from "../Shared/ResultsView";
import TabItemForm from "../TabItemForm";
import PeopleList from "../Shared/PeopleList";
import TabList from "../TabList";

const DinnerView = ({ toggleMode, data }) => {
  const [view, setView] = useState("tabList");

  return (
    <React.Fragment>
      <h1>
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
        <TabItemForm setView={setView} />
      )}
    </React.Fragment>
  );
};

export default DinnerView;