import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./components/contact/Contact";
import Main from "./layouts/main/Main";
import BLogs from "./components/blogs/BLogs";
import Gallery from "./pages/gallery/Gallery";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Videos from "./pages/videos/Videos";
import VideoModel from "./components/videoModel/VideoModel";
import Resturent from "./pages/resturent/Resturent";
import Cards from "./components/cards/Cards";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<BLogs />} />
            <Route path="blogs/detail/:id" element={<Detail />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="video" element={<Videos />} />
            <Route path="video/detail/:id" element={<VideoModel />} />
            <Route path="resturent" element={<Cards />} />
            <Route path="resturent/detail/:id" element={<Resturent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
