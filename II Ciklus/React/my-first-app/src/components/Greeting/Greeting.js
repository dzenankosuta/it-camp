import React from "react";
import Title from "../title/Title";

const Greeting = ({
  name,
  children,
  fontSize,
  fontColor,
  handleParentClick,
}) => {
  const sayWelcome = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    // Fragment je <> ili React.Fragment
    <div>
      {/* <h3
        onClick={() => sayWelcome(name)}
        style={{
          color: fontColor,
          fontSize: fontSize,
        }}
      >
        Hello, {name}
      </h3>
      <p>How are you?</p>
      {children} */}
      <p />
      <p />
      <p />
      <p />
      <p />
      <button onClick={handleParentClick}>Child Component</button>
      {/* pozivanje funkcije iz parent componente */}
      <Title clickHandler={handleParentClick} />
      {/* pozivanje funkcije iz parent componente za grandson */}
    </div>
  );
};

export default Greeting;

// II nacin

// export default function Greeting() {

// };
