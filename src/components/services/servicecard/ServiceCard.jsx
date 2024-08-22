import React from "react";
import "./servicecard.css";
import serviceData from "../../../servicesData/data";

const ServiceCard = () => {
  return (
    <div className="serviceCardMain">
      {serviceData.map((data) => (
        <div className="serviceCard">
          <div className="serviceCardImage">
            <img src={data?.image} alt="" />
          </div>
          <div className="serviceCardText">
            <h3>{data?.title}</h3>
            <p>{data?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
