import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import ResultsHeader from "./ResultsHeader";
import ResultsItemsList from "./ResultsItemsList";
import ResultsPersonsList from "./ResultsPersonsList";

export default function ResultsView({ setView, data, reset }) {
  const [totalCost, setTotalCost] = useState(0);
  const [viewMode, setViewMode] = useState("persons");
  const [personDetail, setPersonDetail] = useState(undefined);
  let costPerPerson = +(totalCost / data.people.loggedPersons.length).toFixed(2);

  const personDetailsToggle = (person) => {
    if(person === personDetail) {
      setPersonDetail(false);
    } else {
      setPersonDetail(person);
    };
  };

  const getItemsList = (loggedPersons) => {
    let items = [];

    loggedPersons.forEach(person => {
      person.items.forEach(item => {
        let listItem = {...item, personName: person.name};
        items.push(listItem);
      });
    });

    return items;
  }

  const getExpensePerPerson = (items) => {
    let expensePerPerson = 0;
    items.forEach(el => {
      expensePerPerson = expensePerPerson + (+el.cost);
    });
    return expensePerPerson;
  };

  const getTotalCost = () => {
    let totalCost = 0;
    data.people.loggedPersons.forEach(el => {
      totalCost = totalCost + getExpensePerPerson(el.items);
    });
    return totalCost;
  };

  const getDifference = (items) => {
    let expensePerPerson = getExpensePerPerson(items);
    return Math.abs(expensePerPerson - costPerPerson);
  }

  useEffect(() => {
    setTotalCost(getTotalCost());
  }, []);
  
  return (
    <div className="view-container">
       <Navbar 
        reset={reset}
        type="resultsView"
        backToPeopleList={() => setView("peopleList")}
      />
      <ResultsHeader 
        viewMode={viewMode}
        totalCost={totalCost}
        setViewMode={setViewMode}
        costPerPerson={costPerPerson}
        setPersonDetail={setPersonDetail}
      />
      {viewMode === "persons" && data.people.loggedPersons.map(person => 
        <ResultsPersonsList
          person={person}
          key={person.name}
          personDetail={personDetail}
          costPerPerson={costPerPerson}
          difference={getDifference(person.items)}
          expensePerPerson={getExpensePerPerson(person.items)}
          personDetailsToggle={() => personDetailsToggle(person.name)}
        />
      )}

      {viewMode === "items" && <ResultsItemsList getItemsList={getItemsList} items={data.people.loggedPersons}/>}
    </div>
  );
};