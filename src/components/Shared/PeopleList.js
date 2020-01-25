// IDEALLY FOR BOTH MODES
// STYLE AND FUNCTIONALITY DEFINED BY MODE

import React from "react";

const styles = {
  flexDirection: "row",
  background: "black",
  color: "white",
  textAlign: "center",
}

const PeopleList = ({ setView, landing }) => {
  return (
    <div>
      <h2>
        2. PEOPLE LIST
      </h2>
      <div style={styles}>
        <h6 onClick={() => landing()}>
          LANDING
        </h6>
        <h3 onClick={() => setView("tabList")}>
          -- EDIT TAB ITEMS
        </h3>
        <h3 onClick={() => setView("resultsView")}>
          GET RESULTS >>
        </h3>
      </div>
    </div>
  );
};

export default PeopleList;