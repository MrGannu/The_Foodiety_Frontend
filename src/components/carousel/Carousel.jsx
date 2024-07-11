import React, { useEffect, useState } from "react";
import axios from "axios";
import "./carousel.css";
import baseURL from "../../baseUrl";
import imageBaseURL from "../../imagebaseUrl";
import LOGO from "../../../public/logo/logo.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${baseURL}/carousel`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  const filteredData = data.slice(0, 7);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carouselContainer">
      {filteredData.length > 0 ? (
        filteredData.map((dat, index) => (
          <img
            key={index}
            src={`${imageBaseURL}${dat.carousel_Image}`}
            loading="lazy"
            className={
              currentIndex === index
                ? "carouselSlide"
                : "carouselSlide carouselSlide-hidden"
            }
            alt={`slide-${index}`}
          />
        ))
      ) : (
        <div className="carouselEmpty">
          <img src={LOGO} alt="" />
        </div>
      )}
      <div className="indicators">
        {filteredData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={
              currentIndex === index
                ? "indicator"
                : "indicator indicator-inactive"
            }
          ></button>
        ))}
      </div>
      <div className="carouselButtons">
        <ion-icon
          name="chevron-back-outline"
          onClick={handlePrevious}
        ></ion-icon>
        <ion-icon
          name="chevron-forward-outline"
          onClick={handleNext}
        ></ion-icon>
      </div>
    </div>
  );
};

export default Carousel;
