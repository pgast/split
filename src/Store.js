import React, { useReducer, createContext } from "react";

const initialState = {
  mode: "landing",
  dinner: {
    items: [
      {name: "beer", qty: 3, cost: 12, indCost: 4, userInputCost: 'bulk'}, 
      {name: "boneless", qty: 2, cost: 10, indCost: 5, userInputCost: 'individual'}
    ],
    people: [],
    itemToEdit: undefined,
  }
};

function reducer (state, action) {
  let newTabItems;

  switch (action.type) {
    case 'TOGGLE_MODE':
      return { ...state, mode: action.payload };

    case 'ADD_TAB_ITEM':
      newTabItems = [...state.dinner.items];
      newTabItems.push(action.payload);
      return { ...state, dinner: { ...state.dinner, items: newTabItems } };

    case 'EDIT_TAB_ITEM':
      let itemToEdit = state.dinner.items.filter(el => el.name === action.payload);
      // if there is 
      return { ...state, dinner: { ...state.dinner, itemToEdit: itemToEdit[0] } };

    case 'UPDATE_TAB_ITEM':
      newTabItems = [...state.dinner.items].filter(el => el.name !== state.dinner.itemToEdit.name);
      let updatedItem = action.payload;
      newTabItems.push(updatedItem);
      return { ...state, dinner: { ...state.dinner, items: newTabItems, itemToEdit: undefined } };
      
    case 'DELETE_TAB_ITEM':
      newTabItems = [...state.dinner.items].filter(el => el.name !== action.payload);
      return { ...state, dinner: { ...state.dinner, items: newTabItems } };

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