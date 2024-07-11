import React, { useEffect, useState } from "react";
import Carousel from "./components/carousel/Carousel";
import Services from "./components/services/Services";
import Heading from "./components/heading/Heading";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import BLogs from "./components/blogs/BLogs";
import Gallery from "./pages/gallery/Gallery";
import Cards from "./components/cards/Cards";
import Videos from "./pages/videos/Videos";
import Spinner from "./components/loadingSpinner/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  if (loading) {
    return (
      <div className="Loading">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="mainContainerDiv">
      <Carousel />
      <About />
      <Heading state={"Our Services :"} />
      <Services />
      <Heading state={"Top Recommended Picks :"} />
      <Cards />
      <Heading state={"Gallery :"} />
      <Gallery />
      <Heading state={"Popular Videos :"} />
      <Videos />
      <Heading state={"Contact us :"} />
      <Contact />
      <Heading state={"Our Blogs :"} />
      <BLogs />
    </div>
  );
};

export default Home;
