import React from "react";
import "./PersonCard.css";

const PersonCard = ({ image, name, occupation }) => {
  return (
    <div className="card">
      <img src={image} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{occupation}</p>
      </div>
    </div>
  );
};

export default PersonCard;
