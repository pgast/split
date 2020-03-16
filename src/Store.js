import React, { useReducer, createContext } from "react";

const initialState = {
  mode: "landing",
  people: {
    loggedPersons: [],
    personToEdit: undefined,
  }
};

function reducer (state, action) {
  let newLoggedPersons;
  switch (action.type) {
    case 'TOGGLE_MODE':
      return { ...state, mode: action.payload };
    case 'ADD_PERSON':
      newLoggedPersons = [...state.people.loggedPersons];
      newLoggedPersons.push(action.payload);
      return { ...state, people: { ...state.people, loggedPersons: newLoggedPersons } };
    case 'EDIT_PERSON':
      let personToEdit = state.people.loggedPersons.filter(el => el.name === action.payload);
      newLoggedPersons = [...state.people.loggedPersons].filter(el => el.name !== action.payload);
      return { ...state, people: { ...state.people, loggedPersons: newLoggedPersons, personToEdit: personToEdit[0] } };   
    case 'DELETE_PERSON':
      newLoggedPersons = [...state.people.loggedPersons].filter(el => el.name !== action.payload);
      return { ...state, people: { ...state.people, loggedPersons: newLoggedPersons } };
    case 'RESET_DATA':
      newLoggedPersons = [];
      return { ...state, people: { ...state.people, loggedPersons: newLoggedPersons } };
    default:
      return state;
  };
};

export function StoreProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}

export const Store = createContext();