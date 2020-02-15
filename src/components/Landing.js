import React from 'react';

export default function Landing({ toggleMode }) {
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