// DINNER MODE 
import React from "react";
import TabItem from "./TabItem";

const styles = {
  flexDirection: "row",
  background: "black",
  color: "white",
  textAlign: "center",
}

const TabList = ({ landing, setView, data }) => {
  return (
    <React.Fragment>
      <h2>
        1. TAB LIST
      </h2>
      <div style={styles}>
        <h6 onClick={() => landing()}>
          LANDING
        </h6>
        <h3 onClick={() => setView("peopleList")}>
          SET PEOPLE >>
        </h3>
      </div>

      {/* DISPLAYS THE TOTAL TAB ITEMS IN A LIST MAPPING <TABITEM> */}
      <ul>
        {data.dinner.items.map(el => <TabItem key={el.name} data={el}/>)}
      </ul>

      {/* 
        HAS AN ADD ITEMS BUTTON <ADD ITEM> 
        if clicked => takes to tab item form <tabitemform>
      */}
      <button onClick={() => setView("tabItemForm")}>Add Item</button>

    </React.Fragment>
  );
};

export default TabList;


// delete item
// edit item
// expandir item (?)