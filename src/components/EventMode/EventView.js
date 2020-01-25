import React from "react";

const EventView = ({ toggleMode }) => {
  return (
    <div>
      <h1>
        Event View
      </h1>
      <h5 onClick={() => toggleMode("landing")}>
        Back
      </h5>
    </div>
  );
};

export default EventView;