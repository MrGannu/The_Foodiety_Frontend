import React, { useEffect, useState } from "react";
import "./about.css";
import { NavLink, useLocation } from "react-router-dom";
import Path from "../../components/path/Path";
import axios from "axios";
import baseURL from "../../baseUrl";
import imageBaseURL from "../../imagebaseUrl";
import Heading from "../heading/Heading";
import GAQ from "../GAQ/GAQ";
import Spinner from "../loadingSpinner/Spinner";
import ServiceCard from "../services/servicecard/ServiceCard";
import Services from "../services/Services";

const About = () => {
  const [data, setData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

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
    <>
      {data.length > 0 ? (
        <div className="aboutContainer">
          {/* Blog Page Path Name */}
          <div className="pagePath">
            {location.pathname !== "/" && <Path />}
          </div>
          {/* BLog Page Datas */}
          <div
            className={
              location.pathname === "/" ? "aboutCardHome" : "aboutCard"
            }
          >
            <div
              className="aboutImage"
              style={{
                height: location.pathname === "/" ? null : "650px",
              }}
            >
              <img
                src={`${imageBaseURL}${imageData[currentIndex]?.image}`}
                alt={imageData[currentIndex]?.image_name}
                className="skeleton"
              />
              <div className="aboutImageButton">
                <ion-icon
                  name="arrow-back-outline"
                  onClick={handlePrevious}
                ></ion-icon>
                <ion-icon
                  name="arrow-forward-outline"
                  onClick={handleNext}
                ></ion-icon>
              </div>
            </div>
            {/* about Text Section */}
            <div
              className="aboutText"
              style={{
                marginLeft:
                  window.innerWidth < 800 || location.pathname !== "/"
                    ? "0"
                    : "2rem",
                marginTop: location.pathname === "/" ? null : "1rem",
              }}
            >
              <h3>
                {location.pathname === "/" ? (
                  "Our Story"
                ) : (
                  <>
                    <span>Welcome To</span>
                    <p className="foodietyTitle">The Foodiety</p>
                  </>
                )}
              </h3>
              {location.pathname === "/" ? (
                <div
                  className="aboutTextParagraph"
                  dangerouslySetInnerHTML={{
                    __html: data[0]?.about_text.substring(0, 600),
                  }}
                />
              ) : (
                <div
                  className="cardContent"
                  dangerouslySetInnerHTML={{
                    __html: data[0]?.about_text,
                  }}
                />
              )}

              {location.pathname === "/about" ? null : (
                <div className="readMore">
                  <NavLink to="/about">
                    <button className="readmoreBtn">
                      <span>More about us</span>
                      <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
            {/*  */}
            {location.pathname === "/" ? null : (
              <Heading state={"Our Services"} />
            )}
            {location.pathname === "/" ? null : (
              <section>
                <Services />
                <ServiceCard />
              </section>
            )}

            {location.pathname === "/" ? null : (
              <>
                {location.pathname === "/" ? null : (
                  <Heading state={"Got Any Questions?"} />
                )}
                <div className="GAQContainer">
                  <GAQ />
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default About;
