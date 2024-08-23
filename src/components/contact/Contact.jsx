import React, { useState, useEffect } from "react";
import "./contact.css";
import Path from "../path/Path";
import { NavLink, useLocation } from "react-router-dom";
import Spinner from "../loadingSpinner/Spinner";
import axios from "axios";
import YOUTUBE from "/icons/ut.png";
import FACEBOOK from "/icons/facebook.png";
import INSTAGRAM from "/icons/instagram.png";
import TIKTOK from "/icons/tiktok.png";
import THREADS from "/icons/threads.png";
import baseURL from "../../baseUrl";

const Contact = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // State variables for form inputs and submission status
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const aboutResponse = await axios.get(`${baseURL}/about`);
        setData(aboutResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }
  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    setLoading(true);

    try {
      const response = await axios.post(`${baseURL}/messages`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        message: message,
      });

      if (response.status === 201) {
        setSubmitSuccess("Message sent successfully!");
        // Clear the form after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={
        location.pathname === "/"
          ? "contactMainContainerHome"
          : "contactMainContainer"
      }
    >
      <div className="contactCard">
        <div className="pagePath">{location.pathname !== "/" && <Path />}</div>
        <div className="contactContainer">
          <div className="contactInfo">
            <h3>
              Feel free to <span className="contactText">Contact</span> with{" "}
              <br /> us for any kind of query.
            </h3>
            <p>
              Thank you for showing your interest in our Foodiety <br />
              page. We consider communication with the customer to be very
              essential.
            </p>
            <div className="contactViaWays">
              <div className="contactItem">
                <div>
                  <img src="./icons/mail.png" alt="" />
                  <span>Mail Address:</span>
                </div>
                <p>{data[0]?.email_address}</p>
              </div>
              <div className="contactItem">
                <div>
                  <img src="./icons/phone.png" alt="" />
                  <span>Phone no:</span>
                </div>
                <p>{data[0]?.phone_number}</p>
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
                to={data[0]?.tiktok_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TIKTOK} alt="" />
              </NavLink>
              <NavLink
                to={data[0]?.threads_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={THREADS} alt="" />
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
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  placeholder="First Name ..."
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name ..."
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="row">
                <input
                  type="email"
                  placeholder="Mail Address ..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone number ..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <textarea
                rows={5}
                cols={30}
                placeholder="Write your message here ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" disabled={loading}>
                <span>Send a Message</span>
                {loading ? (
                  <Spinner />
                ) : (
                  <ion-icon name="navigate-outline"></ion-icon>
                )}
              </button>
            </form>
            {submitSuccess && <p className="successMessage">{submitSuccess}</p>}
            {submitError && <p className="errorMessage">{submitError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
