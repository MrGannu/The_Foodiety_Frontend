import React, { useState } from "react";
import "./card.css";
import { NavLink } from "react-router-dom";
import imageBaseURL from "../../imagebaseUrl";

const Card = ({ state }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? state.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === state.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img
          src={`${imageBaseURL}${state.images[currentIndex]?.image}`}
          alt={state.images[currentIndex]?.image_name}
        />
        <div className="cardImageButton">
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
      <div className="cardText">
        <h3>{state?.name}</h3>
        <div className="cardTextContent">
          <div className="cardTextContentIcon">
            <img src="./services/star.png" alt="rating" />
            <span>{state?.rating}</span>
          </div>
          <div className="cardTextContentIcon">
            <img src="./services/location.png" alt="location" />
            <span>{state?.location}</span>
          </div>
        </div>
        <div className="cardContent">
          <p
            dangerouslySetInnerHTML={{
              __html: state?.about_us.substring(0, 500),
            }}
          />
        </div>
        <div className="readMore">
          <NavLink to={`/resturent/detail/${state.id}`}>
            <button className="readmoreBtn">
              <span>Read more</span>
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
