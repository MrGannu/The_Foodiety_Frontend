import React, { useRef, useState } from "react";
import "./videocard.css";
import REELS from "/icons/reels.png";
import imageBaseURL from "../../imagebaseUrl";
import FULLSCREEN from "/music/full.png";
import MUTE from "/music/mute.png";
import VOLUME from "/music/volume.png";
import PLAY from "/music/play.png";
import PAUSE from "/music/pause.png";

const VideoCard = ({ state, type }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleMute = () => {
    const isCurrentlyMuted = !videoRef.current.muted;
    videoRef.current.muted = isCurrentlyMuted;
    setIsMuted(isCurrentlyMuted);
  };

  return (
    <div className={`videoContainer ${type}`}>
      <img src={REELS} alt="" className="reels_png" />
      <video ref={videoRef} className="videoPlayer">
        <source src={`${imageBaseURL}${state.video}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="controls">
        <button onClick={handlePlayPause} id="PlayPause">
          {isPlaying ? <img src={PAUSE} alt="" /> : <img src={PLAY} alt="" />}
        </button>
        <button onClick={handleFullscreen} id="Fullscreen">
          <img src={FULLSCREEN} alt="" />
        </button>
        <button onClick={handleMute} id="MuteUnmute">
          {isMuted ? <img src={MUTE} alt="" /> : <img src={VOLUME} alt="" />}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
