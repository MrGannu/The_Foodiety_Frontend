import React from "react";
import "./heading.css";
import { useLocation } from "react-router-dom";

const Heading = ({ state }) => {
  const location = useLocation();
  return (
    <div
      className="headingContainer"
      style={{
        padding: location.pathname === "/" ? "" : "0rem",
        marginTop: location.pathname === "/" ? "" : "0rem",
      }}
    >
      <h3>{state}</h3>
    </div>
  );
};

export default Heading;
