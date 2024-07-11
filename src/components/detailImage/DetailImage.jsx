import React, { useState } from "react";
import "./detailimage.css";
import imageBaseURL from "../../imagebaseUrl";

const DetailImage = ({ state, setState }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? state.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === state.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="detailImageContainer">
      <div className="detailImageCarousel">
        <div
          className="detailImageContainerCloseIcon"
          onClick={() => setState(false)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <img
          src={`${imageBaseURL}${state[currentIndex]?.image}`}
          alt="carousel"
        />
        {state.length > 0 && (
          <div className="detailImageCarouselButton">
            <ion-icon
              name="arrow-back-outline"
              onClick={handlePrevious}
            ></ion-icon>
            <ion-icon
              name="arrow-forward-outline"
              onClick={handleNext}
            ></ion-icon>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailImage;
