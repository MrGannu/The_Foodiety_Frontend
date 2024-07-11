import React, { useState } from "react";
import DOWN from "/icons/down.png";
import "./gaq.css";

const GAQ = () => {
  const [openId, setOpenId] = useState(1);
  const data = [
    {
      id: 1,
      title:
        "Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero",
      body1:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      body2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      id: 2,
      title:
        "Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero",
      body1:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      body2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ];

  const handleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="GAQContainer">
      <h3>We have your answers.</h3>
      {data.map((acc) => (
        <div
          className={openId === acc.id ? "activeAccordion" : "accordion"}
          key={acc.id}
          style={{ height: openId === acc.id ? "220px" : "35px" }}
        >
          <div className="accordionHeading">
            <p>{acc.title}</p>
            <img
              src={DOWN}
              alt=""
              onClick={() => handleOpen(acc.id)}
              style={{
                rotate: openId === acc.id ? "-180deg" : null,
              }}
            />
          </div>
          <div className="accordionBody">
            <h3>What is Lorem Ipsum?</h3>
            <p>{acc.body1}</p>
            <p>{acc.body2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GAQ;
