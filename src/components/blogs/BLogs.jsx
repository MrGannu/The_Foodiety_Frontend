import React, { useEffect, useState } from "react";
import "./blogs.css";
import Blog from "../blog/Blog";
import Path from "../path/Path";
import Button from "../button/Button";
import baseURL from "../../baseUrl";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Spinner from "../loadingSpinner/Spinner";
import EMPTY from "/icons/emptyBLog4.png";

const Blogs = () => {
  const [data, setData] = useState(null);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${baseURL}/blogs`);
        setData(response.data);
        const res = await axios.get(`${baseURL}/blogImage`);
        setImage(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter the data based on the pathname
  let filteredData = data;
  if (location.pathname === "/" && data) {
    filteredData = data.slice(0, 6);
  }

  return (
    <>
      <div
        className={
          location.pathname === "/" ? "blogsContainerHome" : "blogsContainer"
        }
      >
        {/* Blog Page Path Name */}
        <div className="pagePath">{location.pathname !== "/" && <Path />}</div>
        {/* Blog Page Datas */}
        <div className="blogs">
          {loading ? (
            <div className="Loading">
              <Spinner />
            </div>
          ) : null}
          <div className="blogCards">
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((dat, i) => {
                return <Blog key={i} state={dat} image={image} />;
              })
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
        </div>
        {/* Blog Page Path Route Button */}
        {location.pathname === "/" && (
          <div className="blogPageButton">
            <Button state="blogs" />
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
