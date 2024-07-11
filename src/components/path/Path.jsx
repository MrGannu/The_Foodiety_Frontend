import React, { useState, useEffect } from "react";
import "./path.css";
import { useLocation } from "react-router-dom";
import Loading from "../loading/Loading";

const Path = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment && isNaN(segment));

  const formatSegment = (segment) => {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <div className="pathContainer">
      <span className="pathName">Home</span>
      {pathSegments.map((segment, index) => (
        <React.Fragment key={index}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
          <span className="pathName">{formatSegment(segment)}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Path;
