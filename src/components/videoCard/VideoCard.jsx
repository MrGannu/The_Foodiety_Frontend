import React from "react";
import "./videocard.css";
import REELS from "/icons/reels.png";
import imageBaseURL from "../../imagebaseUrl";

const VideoCard = ({ state, type }) => {
  return (
    <div className={`videoContainer ${type}`}>
      <img src={REELS} alt="" className="reels_png" />
      <video controls className="videoPlayer">
        <source
          src={`${imageBaseURL}${state.video}`}
          type="video/mp4"
          controls
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCard;
