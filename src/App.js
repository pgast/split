import React, { useContext } from 'react';

import { Store } from './Store';
import Landing from './components/Landing';
import WorkView from './components/WorkView';

export default function App() {
  const { state, dispatch } = useContext(Store);
  const resetData = () => dispatch({ type: 'RESET_DATA' });
  const toggleMode = (mode) => dispatch({ type: 'TOGGLE_MODE', payload: mode });
  const addPerson = (person) => dispatch({ type: "ADD_PERSON", payload: person });
  const editPerson = (personKey) => dispatch({ type: 'EDIT_PERSON', payload: personKey });
  const deletePerson = (personKey) => dispatch({ type: 'DELETE_PERSON', payload: personKey });

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