import React, { useContext } from "react";
import Person from "./Person";
import { Store } from "../Store";

const styles = {
  flexDirection: "row",
  background: "black",
  color: "white",
  textAlign: "center",
}

const PeopleList = ({ setView, landing, data }) => {
  const { dispatch } = useContext(Store);
  const deletePerson = (personKey) => dispatch({ type: 'DELETE_PERSON', payload: personKey });
  const editPerson = (personKey) => dispatch({ type: 'EDIT_PERSON', payload: personKey });

  return (
    <>
      <h2>
        2. PEOPLE LIST
      </h2>
      <div style={styles}>
        <h6 onClick={() => landing()}>
          LANDING
        </h6>
        <h3 onClick={() => setView("resultsView")}>
          GET RESULTS >>
        </h3>
      </div>


      {/* DISPLAYS THE TOTAL PEOPLE IN A LIST MAPPING <PERSON> */}
      {data.people.loggedPersons.map(el => 
        <Person 
          data={el}
          key={el.name}
          editPerson={editPerson}
          deletePerson={deletePerson}
          setView={() => setView("personEdit")}
        /> 
      )}

      {/* 
        HAS AN ADD PERSON BUTTON <ADD PERSON> 
        if clicked => takes to PERSONform <ADD PERSON FORM>
      */}
      <button onClick={() => setView("personForm")}>Add Person</button>
    </>
  );
};

export default PeopleList;