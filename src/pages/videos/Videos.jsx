import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Path from "../../components/path/Path";
import VideoCard from "../../components/videoCard/VideoCard";
import "./videos.css";
import EMPTY from "/icons/emptyBLog2.png";
import Spinner from "../../components/loadingSpinner/Spinner";
import axios from "axios";
import baseURL from "../../baseUrl";

const Videos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/video`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="Loading">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter the data based on the pathname
  let filteredData = data;
  if (window.location.pathname === "/" && data.length > 6) {
    filteredData = data.slice(0, 6);
  }

  return (
    <div
      className={
        window.location.pathname === "/"
          ? "videosContainerHome"
          : "videosContainer"
      }
    >
      {/* Blog Page Path Name */}
      <div className="pagePath">
        {window.location.pathname !== "/" && <Path />}
      </div>
      <div className="videos">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((video) => (
            <VideoCard key={video.id} state={video} type={video.type} />
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
      {window.location.pathname === "/" && (
        <div className="blogPageButton">
          <Button state="video" />
        </div>
      )}
    </div>
  );
};

export default Videos;
