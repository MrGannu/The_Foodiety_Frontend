import React from "react";
import "./button.css";
import { NavLink } from "react-router-dom";

const Button = ({ state }) => {
  return (
    <div className="buttonContainer">
      <NavLink to={`/${state}`}>
        <button>
          <span>View more!</span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </NavLink>
    </div>
  );
};

export default Button;
