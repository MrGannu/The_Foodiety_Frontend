import React, { useEffect, useState } from "react";
import "./resturent.css";
import MAP from "/assets/map.png";
import SMOKING from "/icons/smoking.png";
import WIFI from "/icons/wifi.png";
import BAR from "/icons/bar.png";
import PARKING from "/icons/parking.png";
import RATE from "/icons/rate.png";
import SHOOT from "/icons/shoot.png";
import PHONE from "/icons/call.png";
import MAIL from "/icons/mails.png";
import LOCATION from "/icons/loc.png";
import CLOCK from "/icons/clock.png";
import Heading from "../../components/heading/Heading";
import { useParams } from "react-router-dom";
import baseURL from "../../baseUrl";
import axios from "axios";
import imageBaseURL from "../../imagebaseUrl";
import Path from "../../components/path/Path";
import Spinner from "../../components/loadingSpinner/Spinner";
import DetailImage from "../../components/detailImage/DetailImage";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Resturent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [detailImage, setDetailImage] = useState(false);

  useEffect(() => {
    if (detailImage) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [detailImage]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const productDetailRes = await axios.get(`${baseURL}/product/${id}`);
        setData(productDetailRes.data);
        const productImageRes = await axios.get(`${baseURL}/image`);
        setImage(productImageRes.data);
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

  if (!data || !image) {
    return null;
  }
  const filteredImage = image.filter((img) => img.product_id === data?.id);

  return (
    <>
      {detailImage && (
        <DetailImage
          state={filteredImage}
          setState={setDetailImage}
          resturent={true}
        />
      )}
      <div className="resturentMainContainer">
        {/* Blog Page Path Name */}
        <div className="pagePath">{location.pathname !== "/" && <Path />}</div>
        {/* BLog Page Datas */}
        <div className="resturentContainer">
          <h3>{data?.name}</h3>
          <div className="restMedia">
            {filteredImage.map((img) => (
              <img
                src={`${imageBaseURL}${img.image}`}
                key={img.id}
                onClick={() => setDetailImage(true)}
                alt=""
              />
            ))}
          </div>
          <h4>{data?.location}</h4>
          <div className="restContents">
            <div className="restContentLeft">
              <div className="restText">
                <p
                  className="cardContent"
                  dangerouslySetInnerHTML={{
                    __html: data?.about_us,
                  }}
                />
              </div>
              <Heading state={"Most Popular Facilities"} />
              <div className="restServices">
                <div className="restServis">
                  <img src={SMOKING} alt="" />
                  <span>Non-smoking rooms</span>
                </div>
                <div className="restServis">
                  <img src={WIFI} alt="" />
                  <span>Free WIFI</span>
                </div>
                <div className="restServis">
                  <img src={BAR} alt="" />
                  <span>Bar</span>
                </div>
                <div className="restServis">
                  <img src={PARKING} alt="" />
                  <span>Free Parking</span>
                </div>
              </div>
              <Heading state={"Features"} />
              <div className="restFeatures">
                <p
                  className="cardContent"
                  dangerouslySetInnerHTML={{
                    __html: data?.features,
                  }}
                />
              </div>
            </div>
            <div className="restContentRight">
              <div className="restRatings">
                <Heading state={"Ratings"} />
                <div className="rate">
                  <img src={RATE} alt="" />
                  <span>{data?.rating}</span>
                </div>
                <div className="ratingItems">
                  <div className="ratingItem">
                    <span>Food</span>
                    <img src={SHOOT} alt="" />
                  </div>
                  <div className="ratingItem">
                    <span>Service</span>
                    <img src={SHOOT} alt="" />
                  </div>
                  <div className="ratingItem">
                    <span>Value</span>
                    <img src={SHOOT} alt="" />
                  </div>
                  <div className="ratingItem">
                    <span>Atmosphere</span>
                    <img src={SHOOT} alt="" />
                  </div>
                </div>
              </div>
              <div className="restLocation">
                <Heading state={"Location & Contact"} />
                <MapContainer
                  center={[data?.latitude, data?.longitude]}
                  zoom={13}
                  className="mapImage"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[data?.latitude, data?.longitude]}>
                    {/* <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> */}
                  </Marker>
                </MapContainer>
                <div className="restContact">
                  <img src={LOCATION} alt="" />
                  <span>{data?.location}</span>
                </div>
                <div className="restContact">
                  <img src={PHONE} alt="" />
                  <span>{data?.phone_number}</span>
                </div>
                <div className="restContact">
                  <img src={MAIL} alt="" />
                  <span>foodiety69@gmail.com</span>
                </div>
                <div className="restContact">
                  <img src={CLOCK} alt="" />
                  <span>{data?.opening_time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resturent;
