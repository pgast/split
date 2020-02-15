import React, { useEffect, useState } from "react";

export default function ResultsView({ setView, landing, data }) {
  const [totalCost, setTotalCost] = useState(0);
  let costPerPerson  = +(totalCost / data.people.loggedPersons.length).toFixed(2);

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
        {/* show shopping list y salen todos los items con precio y quien los compro 
          // TOGGLE SHOPPING LIST, PERSON LIST pero person list es default
        */}
      </div>

      {data.people.loggedPersons.map(person => 
        <div key={person.name}>
          {person.name} {getExpensePerPerson(person.items) > costPerPerson ? "IS OWED" : "OWES"} {getDifference(person.items)}
          {/* expand
            shows cuanto pago en total la persona
            cuanto costo cada cosa
          */}
        </div>
      )}
    </>
  );
};