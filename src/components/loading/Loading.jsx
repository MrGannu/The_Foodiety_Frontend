import React from "react";
import "./loading.css";

const CarouselLoading = () => {
  return <div className="carouselLoadingDiv"></div>;
};
const PathLoading = () => {
  return (
    <div className="pathLoadingDiv">
      <span></span>
      <ion-icon name="chevron-forward-outline"></ion-icon>
      <span></span>
    </div>
  );
};

const Loading = ({ loadingType }) => {
  if (loadingType === "carousel") {
    return <CarouselLoading />;
  } else if (loadingType === "path") {
    return <PathLoading />;
  }
  return <div>Loading</div>;
};

export default Loading;
