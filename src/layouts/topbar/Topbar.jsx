import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./topbar.css";

const Topbar = ({ state, setState }) => {
  useEffect(() => {
    if (state) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [state]);

  return (
    <div className={state === true ? "mobileTopbar" : "topbarContainer"}>
      {state ? (
        <img
          src="./icons/cancel.png"
          className="closeMobileTopbar"
          alt=""
          onClick={() => {
            setState(false);
          }}
        />
      ) : null}
      <div className="navItems">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              Services
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/video"
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resturent"
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              Restaurants
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
