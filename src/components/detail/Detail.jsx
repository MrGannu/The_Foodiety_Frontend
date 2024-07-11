import React, { useEffect, useState } from "react";
import "./detail.css";
import Path from "../path/Path";
import Heading from "../heading/Heading";
import THREADS from "/icons/threads.png";
import FACEBOOK from "/icons/fb.png";
import INSTAGRAM from "/icons/insta.png";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import imageBaseURL from "../../imagebaseUrl";
import Spinner from "../loadingSpinner/Spinner";
import baseURL from "../../baseUrl";
import DetailImage from "../detailImage/DetailImage";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [detailImage, setDetailImage] = useState(false);
  const [data, setData] = useState(null);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const resData = await axios.get(`${baseURL}/blog/${id}`);
        setData(resData.data);
        const resImage = await axios.get(`${baseURL}/blogImage`);
        setImage(resImage.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return (
      <div className="Loading">
        <Spinner />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const blogImage = image.filter((image) => image.blog_id === data.id);

  return (
    <>
      {detailImage && (
        <DetailImage state={blogImage} setState={setDetailImage} />
      )}
      <div className="detailContainer">
        <div className="detailContainerCard">
          {/* Blog Page Path Name */}
          <div className="pagePath">
            {location.pathname !== "/" && <Path />}
          </div>
          <div className="detailCard">
            <div className="detailLeft">
              <p className="detailDate">
                <span>{formatDate(data?.publish_date)}</span>
              </p>
              <div className="detailImage">
                {blogImage && ( // Check if blogImage exists before rendering
                  <img
                    src={`${imageBaseURL}${blogImage[0]?.image}`}
                    alt=""
                    onClick={() => setDetailImage(true)}
                  />
                )}
              </div>
              <h3>{data?.blog_title}</h3>
              <p
                className="cardContent"
                dangerouslySetInnerHTML={{
                  __html: data?.blog_text,
                }}
              />
              <div className="socialLinksContainer">
                <Heading state={"Share"} />
                <div className="detailSocialLinks">
                  <a href="/" className="yout">
                    <img src={THREADS} className="socialLogo" alt="THREADS" />
                  </a>
                  <a href="/" className="face">
                    <img src={FACEBOOK} className="socialLogo" alt="Facebook" />
                  </a>
                  <a href="/" className="insta">
                    <img
                      src={INSTAGRAM}
                      className="socialLogo"
                      alt="Instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="detailRight">
              <p>No recent blogs available.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
