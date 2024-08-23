import React, { useEffect, useState } from "react";
import "./blogs.css";
import Blog from "../blog/Blog";
import Path from "../path/Path";
import Button from "../button/Button";
import baseURL from "../../baseUrl";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Empty from "../empty/Empty";

const Blogs = () => {
  const [data, setData] = useState(null);
  console.dir(data);
  const [image, setImage] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
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

  if (!data) {
    return null;
  }
  const filteredData = data
    .filter((blog) => blog.id !== data.id)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  // Filter the data based on the pathname
  // let filteredData = data;
  // if (location.pathname === "/" && data) {
  //   filteredData = data.slice(0, 6);
  // }

  return (
    <div className="blogsContainer">
      <div className="pagePath">{location.pathname !== "/" && <Path />}</div>
      {filteredData && filteredData.length > 0 ? (
        <div className="blogCards">
          {filteredData.map((dat, i) => {
            return <Blog key={i} state={dat} image={image} />;
          })}
        </div>
      ) : (
        <Empty />
      )}
      {/* Blog Page Path Route Button */}
      {location.pathname === "/" && (
        <div className="blogPageButton">
          <Button state="blogs" />
        </div>
      )}
    </div>
  );
};

export default Blogs;
