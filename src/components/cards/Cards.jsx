import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import baseURL from "../../baseUrl";
import axios from "axios";
import Button from "../button/Button";
import Path from "../path/Path";
import Spinner from "../loadingSpinner/Spinner";
import "./cards.css";
import Empty from "../empty/Empty";

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
    <div className="resturentsContainer">
      <div className="pagePath">{location.pathname !== "/" && <Path />}</div>
      {data.length > 0 ? (
        <div className="resturents">
          {productsWithImages.map((product) => (
            <Card key={product.id} state={product} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
      {location.pathname === "/" && (
        <div className="blogPageButton">
          <Button state="restaurant" />
        </div>
      )}
    </div>
  );
};

export default Cards;
