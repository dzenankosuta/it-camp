import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Incrementer from "./components/Incrementer/Incrementer";
import TeamCard from "./components/TeamCard/TeamCard";

const favoriteTeams = [
  { id: 0, name: "Arsenal", points: 6 },
  { id: 1, name: "Man. City", points: 6 },
  { id: 2, name: "Man. United", points: 0 },
  { id: 3, name: "Liverpool", points: 2 },
  { id: 4, name: "Pazar", points: 9 },
  { id: 5, name: "Partizan", points: 5 },
];

function App7() {
  const [teams, setTeams] = useState(favoriteTeams);

  const deleteTeam = (id) => {
    const newTeams = teams.filter((team) => team.id !== id);
    setTeams(newTeams);
  };

  return (
    <div className="card-container">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          name={team.name}
          points={team.points}
          onDeleteTeam={() => deleteTeam(team.id)}
        />
      ))}
    </div>
  );
}

export default App7;
