import React from "react";
import "./contactbar.css";
import LOGO from "/logo/logo.png";
import YOUTUBE from "/icons/youtube.png";
import FACEBOOK from "/icons/facebook.png";
import INSTAGRAM from "/icons/instagram.png";
import CALL from "/icons/call.png";
import MENU from "/icons/menu.png";

const ContactBar = ({ setState }) => {
  return (
    <div className="contactBarContainer">
      <div className="contactBarCard">
        <div className="contactBarLeft">
          <p>Follow Us:</p>
          <div className="socialLinks">
            <img src={YOUTUBE} alt="" />
            <img src={FACEBOOK} alt="" />
            <img src={INSTAGRAM} alt="" />
            <img
              src={MENU}
              className="menu"
              alt=""
              onClick={() => {
                setState(true);
              }}
            />
          </div>
        </div>
        <a href="/">
          <img src={LOGO} className="logo" alt="" />
        </a>
        <div className="contactBarRight">
          <img src={CALL} alt="" />
          <p>+977-61-466669, 61-466670</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
