import React, { useEffect, useState } from "react";
import "./contactbar.css";
import LOGO from "/logo/logo.png";
import YOUTUBE from "/icons/youtube.png";
import FACEBOOK from "/icons/facebook.png";
import INSTAGRAM from "/icons/instagram.png";
import CALL from "/icons/call.png";
import axios from "axios";
import baseURL from "../../baseUrl";
import Spinner from "../loadingSpinner/Spinner";
import { NavLink } from "react-router-dom";
import MENU from "../../../public/mobilemenu/menu.png";

const ContactBar = ({ setState }) => {
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
    <div className="contactBarContainer">
      <div className="contactBarCard">
        <img
          src={MENU}
          alt=""
          className="mobileMenu"
          onClick={() => {
            setState(true);
          }}
        />
        <div className="contactBarLeft">
          <p>Follow Us:</p>
          <div className="socialLinks">
            <NavLink
              to={data[0]?.youtube_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={YOUTUBE} alt="" />
            </NavLink>
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
          </div>
        </div>
        <a href="/">
          <img src={LOGO} className="logo" alt="" />
        </a>
        <div className="contactBarRight">
          <img src={CALL} alt="" />
          <p>
            {data[0]?.phone_number}, {data[0]?.optional_phone_number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
