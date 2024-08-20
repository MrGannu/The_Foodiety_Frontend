import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../../public/logo/foodiety.png";
import HOME from "../../../public/mobilemenu/home.png";
import ABOUT from "../../../public/mobilemenu/about.png";
import CONTACT from "../../../public/mobilemenu/contact.png";
import IMAGE from "../../../public/mobilemenu/image.png";
import VIDEO from "../../../public/mobilemenu/video.png";
import BLOG from "../../../public/mobilemenu/blog.png";
import DISH from "../../../public/mobilemenu/dish.png";
import CLOSE from "../../../public/icons/cancel.png";
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
    <div className={`topbarContainer ${state ? "topbar-active" : ""}`}>
      <div className="topContainerHeading">
        <img src={LOGO} className="mobileTopLogo" alt="" />
        {state ? (
          <img
            src={CLOSE}
            className="closeMobileTopbar"
            alt=""
            onClick={() => {
              setState(false);
            }}
          />
        ) : null}
      </div>
      <div className="navItems">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="/"
            >
              <img src={HOME} className="mobileTopLogo" alt="" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="/about"
            >
              <img src={ABOUT} className="mobileTopLogo" alt="" />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="/contact"
            >
              <img src={CONTACT} className="mobileTopLogo" alt="" />
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="/gallery"
            >
              <img src={IMAGE} className="mobileTopLogo" alt="" />
              <span>Gallery</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="/video"
            >
              <img src={VIDEO} className="mobileTopLogo" alt="" />
              <span>Videos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="/blogs"
            >
              <img src={BLOG} className="mobileTopLogo" alt="" />
              <span>Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="/restaurant"
            >
              <img src={DISH} className="mobileTopLogo" alt="" />
              <span>Restaurants</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
