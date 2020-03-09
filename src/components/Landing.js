import React from 'react';

export default function Landing({ toggleMode }) {
  return (
    <div className="view-container" style={{ background: "salmon", alignItems: "center" }}>
      <div className="landing_banner">
        <div className="landing_banner__main">
          <h1>
            Sp / it
          </h1>
          <h3>Parties, BBQ's, Projects</h3>
        </div>
        <div className="landing__description">
          <p>Input person</p>
          <p>Log items bought and price</p>
          <p>See how much everyone owes or is owed</p>
        </div>
      </div>
      <div className="landing__btn" onClick={() => toggleMode("workView")}>
        START
      </div>
    </div>
  );
};