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
    <div>
      <div className="crypto-list">
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
        <div>
          <p>More information about {name}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoList;
