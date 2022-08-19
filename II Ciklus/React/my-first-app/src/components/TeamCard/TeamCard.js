import React from "react";
import "./TeamCard.css";

const TeamCard = ({ name, points, onDeleteTeam }) => {
  return (
    <div className="team-card">
      <p>{name}</p>
      <p>{points}pt</p>
      <button onClick={onDeleteTeam}>X</button>
    </div>
  );
};

export default TeamCard;
