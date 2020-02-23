import React from 'react';
import '../Styles.css';

export default function Landing({ toggleMode }) {
  return (
    <div className="landing">
      <div className="landing_banner">
        <h1>
          LANDING
        </h1>
        <h3 onClick={() => toggleMode("workView")}>
          Start WorkView
        </h3>
      </div>
    </div>
  );
};