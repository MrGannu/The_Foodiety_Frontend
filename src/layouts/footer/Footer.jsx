import React from "react";
import "./footer.css";
import FOOTERLOGO from "/logo/foodiety.png";
import FACEBOOKLOGO from "/icons/facebook.png";
import INSTAGRAMLOGO from "/icons/instagram.png";
import YOUTUBELOGO from "/icons/ut.png";
import PHONE from "/icons/phn.png";
import EMAIL from "/icons/email.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerCard">
        <div className="footerContent">
          <div className="footerItem">
            <div className="footerLogo">
              <img src={FOOTERLOGO} alt="" />
            </div>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
          </div>
          <div className="footerItem">
            <h3>Contact info</h3>
            <div className="contactLinks">
              <div className="footerContact">
                <img src={PHONE} alt="" />
                <span>+977 9825635452</span>
              </div>
              <div className="footerContact">
                <img src={EMAIL} alt="" />
                <span>foodiety69@gmail.com</span>
              </div>
              <div className="footerContact links">
                <img src={FACEBOOKLOGO} alt="" />
                <img src={INSTAGRAMLOGO} alt="" />
                <img src={YOUTUBELOGO} alt="" />
              </div>
            </div>
          </div>
          <div className="footerItem">
            <h3>Exploer</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="owner">
          Copyright 2024, All Right Reserved by The Foodiety.
        </p>
      </div>
    </div>
  );
};

export default Footer;
