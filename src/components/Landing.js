import React from 'react';

const Landing = ({ toggleMode }) => {
  return (
    <div>
      <h1>
        LANDING
      </h1>
      <h3 onClick={() => toggleMode("workView")}>
        Start WorkView
      </h3>
    </div>
  );
};

export default Landing;