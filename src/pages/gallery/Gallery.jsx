import React, { useEffect, useState } from "react";
import "./gallery.css";
import ImageCard from "../../components/imageCard/ImageCard";
import Path from "../../components/path/Path";
import Button from "../../components/button/Button";
import baseURL from "../../baseUrl";
import axios from "axios";
import Spinner from "../../components/loadingSpinner/Spinner";
import EMPTY from "/icons/emptyBLog.png";

const Gallery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${baseURL}/image`);
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

  if (!data) {
    return null;
  }

  const filteredImages =
    data?.filter((image) => image.image_type !== "portrait").slice(0, 6) || [];

  return (
    <>
      <div className="galleryContainer">
        {/* Blog Page Path Name */}
        <div className="pagePath">{location.pathname !== "/" && <Path />}</div>
        <div className="gallery">
          {data && data.length > 0 ? (
            data.map((image) => (
              <ImageCard key={image.id} state={image} type={image.image_type} />
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>
        {location.pathname === "/" && (
          <div className="blogPageButton">
            <Button state="gallery" />
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
