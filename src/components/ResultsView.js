import React, { useEffect, useState } from "react";

export default function ResultsView({ setView, landing, data }) {
  const [totalCost, setTotalCost] = useState(0);
  const [viewMode, setViewMode] = useState("persons");
  const [personDetail, setPersonDetail] = useState(undefined);
  let costPerPerson  = +(totalCost / data.people.loggedPersons.length).toFixed(2);

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
  
  const styles = {
    flexDirection: "row",
    background: "black",
    color: "white",
    textAlign: "center",
  }

  const btnStyle = {
    background: "black",
    color: "white"
  };

  return (
    <>
      <h2>
        3. RESULTS VIEW
      </h2>
      <div style={styles}>
        <h6 onClick={() => landing()}>
          LANDING
        </h6>
        <h3 onClick={() => setView("peopleList")}>
          EDIT PEOPLE
        </h3>
      </div>

      <div>
        <h1>Total cost: {totalCost}</h1>
        <h2>Cost per person: {costPerPerson}</h2>
        <span>
          <h3 style={viewMode === "persons" ? btnStyle : null} onClick={viewMode === "persons" ? null : () => setViewMode("persons")}>PERSONS LIST</h3>
          <h3 style={viewMode === "items" ? btnStyle : null} onClick={viewMode === "items" ? null : () => setViewMode("items")}>ITEMS LIST</h3>
        </span>
      </div>

      {viewMode === "persons" && data.people.loggedPersons.map(person => 
        <div key={person.name} onClick={() => personDetailsToggle(person.name)}>
          {person.name} {getExpensePerPerson(person.items) > costPerPerson ? "IS OWED" : "OWES"} {getDifference(person.items)}
          {personDetail === person.name && (
            <>
              <h3>{getExpensePerPerson(person.items)} - paid</h3>
              <ol>
                {person.items.map(item => <li key={item.name}>{item.name} - {item.cost}</li>)}
              </ol>
            </>
          )}
        </div>
      )}

      {viewMode === "items" && getItemsList(data.people.loggedPersons).map(item => 
        <div key={item.name}>
          {item.name} - ${item.cost} - {item.personName}
        </div>
      )}
    </>
  );
};