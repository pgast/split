// DISPLAYS RESULTS FOR BOTH TYPES OF FUNCTIONALITY
// TWO STYLES AND FUNCTIONALITIES DEPENDING ON THE MODE
import React from "react";

const ResultsView = ({ setView, landing }) => {
  
  const styles = {
    flexDirection: "row",
    background: "black",
    color: "white",
    textAlign: "center",
  }

  return (
    <div>
      <h2>
        3. RESULTS VIEW
      </h2>
      <div style={styles}>
        <h6 onClick={() => landing()}>
          LANDING
        </h6>
        <h3 onClick={() => setView("tabList")}>
          EDIT TAB ITEMS
        </h3>
        <h3 onClick={() => setView("peopleList")}>
          EDIT PEOPLE
        </h3>
      </div>
    </div>
  );
};

export default ResultsView;