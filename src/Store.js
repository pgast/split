import React, { useReducer, createContext } from "react";

const initialState = {
  mode: "landing",
  dinner: {
    items: [{name: "beer", qty: 3, cost: 12}, {name: "boneless", qty: 23, cost: 14}],
    people: []
  }
};

function reducer (state, action) {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return { ...state, mode: action.payload };

    case 'ADD_TAB_ITEM':
      let newTabItems = [...state.dinner.items];
      newTabItems.push(action.payload);
      return { ...state, dinner: { items: newTabItems } };
      
    default:
      return state;
  }
}

export function StoreProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}

export const Store = createContext();