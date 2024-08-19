import React, { useState, useEffect } from "react";
import "./blog.css";
import { NavLink } from "react-router-dom";
import imageBaseURL from "../../imagebaseUrl";

const Blog = ({ state, image = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = "http://127.0.0.1:8000/";

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [state.image]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // Find the correct image for this blog post
  const blogImage = image.find((img) => img.blog_id === state.id);

  return (
    <div className="blogContainer">
      <NavLink to={`/blogs/detail/${state.id}`} className="navlink blogNavlink">
        <div className="blogImage">
          <img src={`${imageBaseURL}${blogImage?.image}`} alt="Blog" />
        </div>
        <div className="blogText">
          <span>{formatDate(state.publish_date)}</span>
          <h3>{state.blog_title} ...</h3>
          <div
            className="cardContent"
            dangerouslySetInnerHTML={{
              __html: state.blog_text,
            }}
          />
        </div>
      </NavLink>
    </div>
  );
};

export default Blog;
