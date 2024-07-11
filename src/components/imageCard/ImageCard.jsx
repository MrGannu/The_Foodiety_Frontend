import React, { useState, useEffect } from "react";
import "./imagecard.css";
import imageBaseURL from "../../imagebaseUrl";

export const Modal = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={imageAlt} className="modalImage" />
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
  return (
    <div className={`imageContainer `}>
      <div className="singleImageWrapper">
        <img
          src={`${imageBaseURL}${state.image}`}
          alt={state.type}
          onClick={handleImageClick}
        />
      </div>
      <span>{state.image_name}</span>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={`${imageBaseURL}${state.image}`}
        imageAlt={state.type}
      />
    </div>
  );
};

export default ImageCard;
