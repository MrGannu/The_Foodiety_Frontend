import React from "react";
import NoPAGE from "../../../public/icons/404.png";
import BACK from "../../../public/icons/back.png";
import "./nopage.css";
import { NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="nopageContainer">
      <img src={NoPAGE} alt="No Page Image" />
      <span>Page no found.</span>
      <NavLink to={"/"} className="backtohomepage">
        <img src={BACK} alt="" />
        Back to Home Page
      </NavLink>
    </div>
  );
};

export default NoPage;
