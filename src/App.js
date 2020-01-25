import React, { useContext } from 'react';

import DinnerView from './components/DinnerMode/DinnerView';
import EventView from './components/EventMode/EventView';
import Landing from './components/Landing';
import { Store } from './Store';

const App = () => {
  const { state, dispatch } = useContext(Store);
  const toggleMode = (mode) => dispatch({ type: 'TOGGLE_MODE', payload: mode });

  return (
    <React.Fragment>
     {state.mode === "landing" && <Landing toggleMode={toggleMode} />}
     {state.mode === "dinner" && <DinnerView toggleMode={toggleMode} data={state}/>}
     {state.mode === "event" && <EventView toggleMode={toggleMode} />}
    </React.Fragment>
  );
};
    
export default App;
