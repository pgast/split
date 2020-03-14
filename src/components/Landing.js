import React from 'react';

export default function Landing({ toggleMode }) {
  return (
    <div className="view-container landing">
      <div className="landing__banner">
        <div className="landing__banner__main">
          <h1 className="landing__banner__main__title">
            Split
          </h1>
          <hr className="landing__banner__main__ruler"/>
          <h3 className="landing__banner__main__title landing__banner__main__title--description">
            Expense breakdown for parties, projects and more..
          </h3>
        </div>
        <div className="landing__description">
          <p className="landing__description__paragraph">Add person</p>
          <p className="landing__description__paragraph">Log items bought and prices</p>
          <p className="landing__description__paragraph">See how much everyone owes or is owed</p>
        </div>
      </div>
      <div className="button button--landing" onClick={() => toggleMode("workView")}>
        START
      </div>
    </div>
  );
};