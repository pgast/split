import React, { useReducer, createContext } from "react";

const initialState = {
  mode: "landing",
  dinner: {
    items: [
      {name: "beer", qty: 3, cost: 12, indCost: 4, userInputCost: 'bulk'}, 
      {name: "boneless", qty: 2, cost: 10, indCost: 5, userInputCost: 'individual'}
    ],
    tally: [{name: "beer", qty:3}, {name: "boneless", qty:2}],
    itemToEdit: undefined,
  },
  people: {
    loggedPersons: [{name: "joe"}, {name: "phil"}],
    personToEdit: undefined,
  },
};

function reducer (state, action) {
  let newTabItems, newLoggedPersons;
  let newTally = [];

  switch (action.type) {
    case 'TOGGLE_MODE':
      return { ...state, mode: action.payload };


    // TAB ITEMS IN DINNER MODE
    case 'ADD_TAB_ITEM':
      newTabItems = [...state.dinner.items];
      newTabItems.push(action.payload);
      newTabItems.forEach(el => {
        newTally.push({ name: el.name, qty: el.qty });
      });

      let result2 = { ...state, dinner: { ...state.dinner, items: newTabItems, itemToEdit: undefined, tally: newTally } };
      console.log(result2.dinner);
      return result2;  
      // return { ...state, dinner: { ...state.dinner, items: newTabItems, itemToEdit: undefined, tally: newTally } };

    case 'EDIT_TAB_ITEM':
      let itemToEdit = state.dinner.items.filter(el => el.name === action.payload);
      newTabItems = [...state.dinner.items].filter(el => el.name !== action.payload);
      return { ...state, dinner: { ...state.dinner, itemToEdit: itemToEdit[0], items: newTabItems } };

    case 'DELETE_TAB_ITEM':
      newTabItems = [...state.dinner.items].filter(el => el.name !== action.payload);
      newTabItems.forEach(el => {
        newTally.push({ name: el.name, qty: el.qty });
      });

      let result = { ...state, dinner: { ...state.dinner, items: newTabItems, tally: newTally } };
      console.log(result.dinner);
      return result;
      // return { ...state, dinner: { ...state.dinner, items: newTabItems, tally: newTally } };


      
    // CRUD FOR LOGGING PEOPLE INTO THE APP
    case 'DELETE_PERSON':
      newLoggedPersons = [...state.people.loggedPersons].filter(el => el.name !== action.payload);
      return { ...state, people: { ...state.people, loggedPersons: newLoggedPersons } };

    case 'ADD_PERSON':
      newLoggedPersons = [...state.people.loggedPersons];
      newLoggedPersons.push(action.payload);
      return { ...state, people: { ...state.people, loggedPersons: newLoggedPersons } };

    case 'EDIT_PERSON':
      let personToEdit = state.people.loggedPersons.filter(el => el.name === action.payload);
      newLoggedPersons = [...state.people.loggedPersons].filter(el => el.name !== action.payload);
      return { ...state, people: { ...state.people, loggedPersons: newLoggedPersons, personToEdit: personToEdit[0] } };

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