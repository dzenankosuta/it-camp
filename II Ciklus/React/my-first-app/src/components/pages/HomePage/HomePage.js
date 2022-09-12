import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [name] = useState();
  const navigate = useNavigate();
  let btnStyle = {
    padding: "0.8rem",
    background: "#9ad24e",
    border: "none",
    borderRadius: "1rem",
    cursor: "pointer",
  };
  return (
    <>
      <p> From home page you can acces any other page on one more way</p>
      {/* Two ways to go to other route: */}
      <h2>Click the button to access About Page</h2>
      <Link to="about">
        <button style={btnStyle}>Go to about</button>
      </Link>
      <h2>Click the button to access Team Page</h2>
      <button
        style={btnStyle}
        onClick={() =>
          navigate("team", {
            state: {
              name: name,
            },
          })
        }
      >
        Go to our team
      </button>
    </>
  );
};

export default HomePage;
