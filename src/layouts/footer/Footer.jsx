import React, { useEffect, useState } from "react";
import "./footer.css";
import FOOTERLOGO from "/logo/foodiety.png";
import FACEBOOKLOGO from "/icons/facebook.png";
import INSTAGRAMLOGO from "/icons/instagram.png";
import YOUTUBELOGO from "/icons/ut.png";
import PHONE from "/icons/footPhone.png";
import EMAIL from "/icons/footMail.png";
import baseURL from "../../baseUrl";
import axios from "axios";
import Spinner from "../../components/loadingSpinner/Spinner";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
    <div className="footerContainer">
      <div className="footerCard">
        <div className="footerContent">
          <div className="footerItem">
            <div className="footerLogo">
              <img src={FOOTERLOGO} alt="" />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: data[0]?.about_text.substring(0, 150),
              }}
            ></div>
          </div>
          <div className="footerItem">
            <h3>Contact info</h3>
            <div className="contactLinks">
              <div className="footerContact">
                <img src={PHONE} alt="" />
                <span>{data[0]?.phone_number}</span>
              </div>
              <div className="footerContact">
                <img src={EMAIL} alt="" />
                <span>{data[0]?.email_address}</span>
              </div>
              <div className="footerContact links">
                <NavLink
                  to={data[0]?.facebook_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={FACEBOOKLOGO} alt="" />
                </NavLink>
                <NavLink
                  to={data[0]?.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={INSTAGRAMLOGO} alt="" />
                </NavLink>
                <NavLink
                  to={data[0]?.youtube_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={YOUTUBELOGO} alt="" />
                </NavLink>
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
