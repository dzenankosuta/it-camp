import React from "react";
import "./PersonCard.css";

const PersonCard = ({ imageSrc, name, occupation, verification }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>{verification ? <b>{name} ✅</b> : <b>{name} </b>}</h4>
        <p>{occupation}</p>
      </div>
    </div>
  );
};

export default PersonCard;
