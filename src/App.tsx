import React, { useContext } from 'react';

import Landing from './components/Landing';
import WorkView from './components/WorkView';
import { Person, Store, StateTypes, ActionTypes } from './Store';

type DispatchType = (action: ActionTypes) => void;
type DeleteType<A> =  (personKey: A) => void;


export default function App() {
  const { state, dispatch }: { state: StateTypes, dispatch: DispatchType } = useContext(Store);
  const resetData = () => dispatch({ type: 'RESET_DATA' });
  const toggleMode = (mode: string) => dispatch({ type: 'TOGGLE_MODE', payload: mode });
  const addPerson = (person: Person) => dispatch({ type: "ADD_PERSON", payload: person });
  const editPerson: any = (personKey: string) => dispatch({ type: 'EDIT_PERSON', payload: personKey });
  const deletePerson: DeleteType<any> = (personKey: string) => dispatch({ type: 'DELETE_PERSON', payload: personKey });

  return (
    <>
     {state.mode === "landing" && <Landing toggleMode={toggleMode}/>}
     {state.mode === "workView" && (
        <WorkView 
          data={state} 
          resetData={resetData}
          toggleMode={toggleMode} 
          addPersonDispatch={addPerson} 
          editPersonDispatch={editPerson}
          deletePersonDispatch={deletePerson} 
        />
      )}
    </>
  );
};