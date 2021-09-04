import React, { useReducer, createContext } from "react";

export interface Item {
  name: string,
  cost: number
}

export interface Person {
  name: string,
  items: Item[]
}

export interface StateTypes {
  mode: string,
  people: {
    loggedPersons: Person[],
    personToEdit: undefined | Person
  }
}

export type ActionTypes = 
  | { type: "TOGGLE_MODE", payload: string }
  | { type: "ADD_PERSON", payload: Person }
  | { type: "EDIT_PERSON", payload: string}
  | { type: "DELETE_PERSON", payload: string }
  | { type: "RESET_DATA" }

const initialState: StateTypes = {
  mode: "landing",
  people: {
    loggedPersons: [],
    personToEdit: undefined,
  }
};

function reducer (state: typeof initialState, action: ActionTypes): StateTypes {
  let newLoggedPersons: Person[];
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

export function StoreProvider (props: any) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}

// Revisar esto despues
// export const Store = createContext<any | undefined>(undefined);
// export const Store = createContext<StateTypes>(initialState);
// export const Store = createContext<[StateTypes, React.Dispatch<any>] | undefined>(undefined);


export const Store = createContext<{
  state: StateTypes;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});