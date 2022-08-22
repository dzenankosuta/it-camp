import React, { useState } from "react";
import "./CryptoList.css";

const CryptoList = ({ name, value, deleteCrypto }) => {
  const [showMore, setShowMore] = useState();
  return (
    <div>
      <div className="crypto-list">
        <p>{name}</p>
        <p>$ {value}</p>
        <button className="btn2" onClick={() => setShowMore((prev) => !prev)}>
          {!showMore ? "Show More" : "Show less"}
        </button>
        <button className="btn2" onClick={deleteCrypto}>
          X
        </button>
      </div>
      {showMore && (
        <div>
          <p>More information about {name}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoList;
