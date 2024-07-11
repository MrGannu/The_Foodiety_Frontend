import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import baseURL from "../../baseUrl";
import axios from "axios";
import Button from "../button/Button";
import Path from "../path/Path";
import Spinner from "../loadingSpinner/Spinner";
import "./cards.css";
import EMPTY from "/icons/emptyBLog3.png";

const Cards = () => {
  const [data, setData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const productResponse = await axios.get(`${baseURL}/product`);
        setData(productResponse.data);

        const imageResponse = await axios.get(`${baseURL}/image`);
        setImageData(imageResponse.data);
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

  if (!data || !imageData) {
    return null;
  }

  const productsWithImages = data.map((product) => ({
    ...product,
    images: imageData.filter((image) => image.product_id === product.id),
  }));

  return (
    <>
      <div className="resturentsContainer">
        {/* Blog Page Path Name */}
        <div className="pagePath">{location.pathname !== "/" && <Path />}</div>
        <div className="resturents">
          {data.length > 0 ? (
            productsWithImages.map((product) => (
              <Card key={product.id} state={product} />
            ))
          ) : (
            <p>No resturents available.</p>
          )}
        </div>
        {location.pathname === "/" && (
          <div className="blogPageButton">
            <Button state="resturent" />
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
