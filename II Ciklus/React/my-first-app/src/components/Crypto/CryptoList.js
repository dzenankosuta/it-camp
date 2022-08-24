import React, { useState } from "react";
import "./CryptoList.css";

const CryptoList = ({
  name,
  value,
  deleteCrypto,
  showMore,
  isDescriptionVisible,
}) => {
  return (
    <div className="crypto-list">
      <div className="crypto-list-item">
        <p>{name}</p>
        <p>$ {value}</p>
        <button className="btn2" onClick={() => showMore()}>
          {!isDescriptionVisible ? "Show More" : "Show less"}
        </button>
        <button className="btn2" onClick={deleteCrypto}>
          X
        </button>
      </div>
      {isDescriptionVisible && (
        <div className="description">
          <p>
            {name} Crypto is one of most popular in the world. The value $
            {value} is in growth in the last few years.
          </p>
        </div>
      )}
    </div>
  );
};

export default CryptoList;
