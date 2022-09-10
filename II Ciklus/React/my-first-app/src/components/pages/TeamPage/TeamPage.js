import React from "react";
import TeamCard from "./TeamCard";

const TEAM = [
  {
    name: "Aaron Ramsdale",
    description:
      " Very highly regarded throughout the early part of his career, Aaron made the switch from Sheffield United.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Ramsdale_Profile_1100x693_0.jpg?itok=0RGC_UBR",
  },
  {
    name: "Kieran Tierney",
    description:
      "Already a firm fans’ favourite, Kieran has underlined his status as one of the best young defenders on the continent during his first two years at the club.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Tierney_Profile_1100x693_1.jpg?itok=uIoQcwEG",
  },
  {
    name: "Takehiro Tomiyasu",
    description:
      "Versatile defender Takehiro became our final signing of the summer when he joined the club from Serie A side Bologna on transfer deadline day.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Tomiyasu_Profile_1100x693_0.jpg?itok=9_OBcizW",
  },
  {
    name: "Thomas Partey",
    description:
      "A powerful, skilful central midfielder, Thomas gave a number of stand-out performances during his debut season.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Partey_Profile_1100x693_0.jpg?itok=p9dFCw61",
  },
  {
    name: "Martin Odegaard",
    description:
      "A highly creative, technical attacking midfielder, Martin is most comfortable in the No. 10 role but can also play in deeper central midfield or out wide.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Odegaard_Profile_1100x693_0.jpg?itok=deJq4bzS",
  },
  {
    name: "Emile Smith Rowe",
    description:
      "An immensely gifted, creative midfielder, Emile made massive strides last season and become an increasingly influential part of the team as the campaign wore on.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/SmithRowe_Profile_1100x693_0.jpg?itok=AzOgDDpJ",
  },
  {
    name: "Gabriel Jesus",
    description:
      "A dynamic forward with a wealth of Premier League experience, Gabriel joined in the summer to reunite with Mikel Arteta.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Jesus_Profile_1100x693_0.jpg?itok=XGMDDMEF",
  },
  {
    name: "Gabriel Martinelli",
    description:
      "One of the most exciting players of his generation, Gabriel once again highlighted his vast potential last season. An electric forward.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Martinelli_Profile_1100x693_0.jpg?itok=72tZRUfL",
  },
  {
    name: "Bukayo Saka",
    description:
      "Arsenal’s Player of the Season for 2020/21, Bukayo continued to make great strides forward last term, confirming his status as one of the hottest young prospects in European football.",
    urlToImage:
      "https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Saka_Profile_1100x693_0.jpg?itok=LvMDBAP2",
  },
];

const TeamPage = () => {
  return (
    <>
      <h1>This is our Team</h1>
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

export default TeamPage;
