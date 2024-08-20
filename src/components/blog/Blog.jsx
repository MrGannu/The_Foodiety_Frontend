import React from "react";
import "./blog.css";
import { NavLink } from "react-router-dom";
import imageBaseURL from "../../imagebaseUrl";

const Blog = ({ state, image = [] }) => {
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
      <div className="blogImage">
        <img src={`${imageBaseURL}${blogImage?.image}`} alt="Blog" />
      </div>
      <div className="blogText">
        <span>{formatDate(state.publish_date)}</span>
        <NavLink to={`/blogs/detail/${state.id}`}>
          <h3>{state.blog_title} ...</h3>
          <div
            className="cardContent"
            dangerouslySetInnerHTML={{
              __html: state.blog_text,
            }}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Blog;
