// DINNER MODE 
import React, { useContext } from "react";
import TabItem from "./TabItem";
import { Store } from "../Store";

const styles = {
  flexDirection: "row",
  textAlign: "center",
  background: "black",
  color: "white",
}

const TabList = ({ landing, setView, data }) => {
  const { dispatch } = useContext(Store);
  const deleteItem = (itemKey) => dispatch({ type: "DELETE_TAB_ITEM", payload: itemKey });
  const editItem = (itemKey) => dispatch({ type: "EDIT_TAB_ITEM", payload: itemKey })
 
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
      {data.dinner.items.map(el => 
        <TabItem 
          data={el} 
          key={el.name} 
          editItem={editItem} 
          deleteItem={deleteItem}
          setView={() => setView("tabItemEdit")}
        />
      )}

      {/* 
        HAS AN ADD ITEMS BUTTON <ADD ITEM> 
        if clicked => takes to tab item form <tabitemform>
      */}
      <button onClick={() => setView("tabItemForm")}>Add Item</button>

    </React.Fragment>
  );
};

export default TabList;