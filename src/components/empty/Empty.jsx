import React from "react";
import "./empty.css";
import NoData from "../../../public/icons/empty.png";

const Empty = () => {
  return (
    <div
      className={
        location.pathname === "/" ? "emptyContainerHome" : "emptyContainer"
      }
    >
      <img src={NoData} alt="Empty Image" />
      <span>No data found.</span>
    </div>
  );
};

export default Empty;
