import React from 'react';

const Landing = ({ toggleMode }) => {
  return (
    <div>
      <h1>
        Select Mode:
      </h1>
      <h3 onClick={() => toggleMode("dinner")}>
        Dinner
      </h3>
      <h3 onClick={() => toggleMode("event")}>
        Event
      </h3>
    </div>
  );
};

export default Landing;