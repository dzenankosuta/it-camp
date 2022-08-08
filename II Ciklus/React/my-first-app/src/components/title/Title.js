import React from "react";
import "./Title.css";
const Title = ({ name, age }) => {
  // console.log(props);  2x vrsi console.log() jer je to princim StrictMode

  return (
    <h3 className="neka-klasa">
      Zdravo {name}, imas {age} godina.
    </h3>
  );
};

export default Title;
