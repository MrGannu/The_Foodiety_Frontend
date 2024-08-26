import React, { useState } from "react";
import "./imagecard.css";
import imageBaseURL from "../../imagebaseUrl";

export const Modal = ({ onClose, imageUrl, imageAlt }) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={imageAlt} className="modalImage" />
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

const ImageCard = ({ state, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Determine the orientation class based on the image type
  const orientationClass = type === "landscape" ? "landscape" : "portrait";

  return (
    <>
      <div className={`imageContainer ${orientationClass}`}>
        <img
          src={`${imageBaseURL}${state.image}`}
          alt={state.type}
          onClick={handleImageClick}
        />
        <span>{state.image_name}</span>
      </div>
      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          imageUrl={`${imageBaseURL}${state.image}`}
          imageAlt={state.type}
        />
      )}
    </>
  );
};

export default ImageCard;
