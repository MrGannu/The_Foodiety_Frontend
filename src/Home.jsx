import React from "react";
import Carousel from "./components/carousel/Carousel";
import Services from "./components/services/Services";
import Heading from "./components/heading/Heading";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import BLogs from "./components/blogs/BLogs";
import Gallery from "./pages/gallery/Gallery";
import Cards from "./components/cards/Cards";
import Videos from "./pages/videos/Videos";

const Home = () => {
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
      <Heading state={"Contact Us :"} />
      <Contact />
      <Heading state={"Our Blogs :"} />
      <BLogs />
    </div>
  );
};

export default Home;
