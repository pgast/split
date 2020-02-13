import React, { useContext } from 'react';

import WorkView from './components/WorkView';
import Landing from './components/Landing';
import { Store } from './Store';

const App = () => {
  const { state, dispatch } = useContext(Store);
  const toggleMode = (mode) => dispatch({ type: 'TOGGLE_MODE', payload: mode });

  return (
    <>
     {state.mode === "landing" && <Landing toggleMode={toggleMode} />}
     {state.mode === "workView" && <WorkView toggleMode={toggleMode} data={state} />}
    </>
  );
};
    
export default App;
