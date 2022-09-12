import React from "react";
import { useLocation } from "react-router-dom";
import TeamCard from "./TeamCard";

const NewsPage = () => {
  return (
    <>
      <h1>This is our News</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "2rem",
        }}
      >
        {TEAM.map((player) => (
          <TeamCard
            image={player.urlToImage}
            name={player.name}
            description={player.description}
          />
        ))}
      </div>
    </>
  );
};

export default NewsPage;
