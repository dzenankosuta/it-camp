import React from "react";
import "./Title.css";
const Title = ({ name, age, clickHandler }) => {
  // console.log(props);  2x vrsi console.log() jer je to princim StrictMode

  return (
    <h3 className="neka-klasa h3" onClick={clickHandler}>
      {/* pozivanje funkcije iz grandfather componente - Props drilling*/}
      {/* Zdravo {name}, imas {age} godina. */}
      Zdravo
    </h3>
  );
};

export default Title;
