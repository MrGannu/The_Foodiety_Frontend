import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="servicesContainer">
      <div className="servicesItmes">
        <div className="servicesItem">
          <div className="serviceImg">
            <img src="./services/cinema.png" alt="" />
          </div>
          <span>Reels</span>
        </div>
        <div className="servicesItem">
          <div className="serviceImg">
            <img src="./services/camera.png" alt="" />
          </div>
          <span>Photography</span>
        </div>
        <div className="servicesItem">
          <div className="serviceImg">
            <img src="./services/gif.png" alt="" />
          </div>
          <span>Graphics</span>
        </div>
        <div className="servicesItem">
          <div className="serviceImg">
            <img src="./services/videography.png" alt="" />
          </div>
          <span>Videography</span>
        </div>
        <div className="servicesItem">
          <div className="serviceImg">
            <img src="./services/web.png" alt="" />
          </div>
          <span>Website</span>
        </div>
        <div className="servicesItem">
          <div className="serviceImg">
            <img src="./services/mobile.png" alt="" />
          </div>
          <span>Mobile App</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
