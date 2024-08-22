import React, { useEffect, useState } from "react";
import "./contact.css";
import Path from "../path/Path";
import { NavLink, useLocation } from "react-router-dom";
import Spinner from "../loadingSpinner/Spinner";
import axios from "axios";
import baseURL from "../../baseUrl";
import YOUTUBE from "/icons/youtube.png";
import FACEBOOK from "/icons/facebook.png";
import INSTAGRAM from "/icons/instagram.png";

const Contact = () => {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const aboutResponse = await axios.get(`${baseURL}/about`);
        setData(aboutResponse.data);

        const imageResponse = await axios.get(`${baseURL}/aboutImage`);
        setImageData(imageResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="Loading">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !imageData) {
    return null;
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
              <NavLink
                to={data[0]?.facebook_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FACEBOOK} alt="" />
              </NavLink>
              <NavLink
                to={data[0]?.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={INSTAGRAM} alt="" />
              </NavLink>
              <NavLink
                to={data[0]?.youtube_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YOUTUBE} alt="" />
              </NavLink>
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
