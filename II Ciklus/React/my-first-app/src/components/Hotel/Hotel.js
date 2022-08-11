import React from "react";
import "./Hotel.css";

const Hotel = ({
  image,
  ocena,
  ocenaLokacije,
  deskripcija,
  naziv,
  lokacija,
}) => {
  return (
    <div className="hotel">
      <img className="img" src={image} alt={"Slika hotela"} />
      <div className="content">
        <h1 className="naslov">{naziv}</h1>
        <p className="under">{lokacija}</p>
        <p>{deskripcija}</p>
      </div>
      <div className="buttons">
        <p>
          Ocena <span className="ocena">{ocena}</span>
        </p>
        <p className="under2">Lokacija {ocenaLokacije}</p>
        <button className="button">Prikazi cene</button>
      </div>
    </div>
  );
};

export default Hotel;
