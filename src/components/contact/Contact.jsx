import React, { useEffect, useState } from "react";
import "./contact.css";
import Path from "../path/Path";
import { useLocation } from "react-router-dom";
import Spinner from "../loadingSpinner/Spinner";

const Contact = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  if (loading) {
    return (
      <div className="Loading">
        <Spinner />
      </div>
    );
  }
  return (
    <div
      className={
        location.pathname === "/"
          ? "contactMainContainerHome"
          : "contactMainContainer"
      }
    >
      <div className="contactCard">
        {/* Blog Page Path Name */}
        <div className="pagePath">{location.pathname !== "/" && <Path />}</div>
        <div className="contactContainer">
          <div className="contactInfo">
            <h3>
              Feel free to <span>Contact</span> with <br /> us for any kind of
              query.
            </h3>
            <p>
              Thank you for showing your intrest in our Foodiety <br />
              page, We consider communication with the customer is very
              essential.
            </p>
            <div className="contactVai">
              <div className="contactItem">
                <div>
                  <img src="./icons/mail.png" alt="" />
                  <span>Mail Address:</span>
                </div>
                <p>foodiety69@gmail.com</p>
              </div>
              <div className="contactItem">
                <div>
                  <img src="./icons/phone.png" alt="" />
                  <span>Phone no:</span>
                </div>
                <p>+977 9815139756</p>
              </div>
            </div>
            <div className="contactSocialLinks">
              <p>Follow us:</p>
              <img src="./icons/facebook.png" alt="" />
              <img src="./icons/instagram.png" alt="" />
              <img src="./icons/youtube.png" alt="" />
            </div>
          </div>
          <div className="contactForm">
            <div className="row">
              <input type="text" placeholder="First Name ..." />
              <input type="text" placeholder="Last Name ..." />
            </div>
            <div className="row">
              <input type="text" placeholder="Mail Address ..." />
              <input type="text" placeholder="Phone number ..." />
            </div>
            <textarea
              name=""
              rows={5}
              cols={30}
              id=""
              placeholder="Write your message here ..."
            ></textarea>
            <button>
              <span>Send a Message</span>
              <ion-icon name="navigate-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
