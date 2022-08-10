import React from "react";

const Greeting = ({ name, children, fontSize, fontColor }) => {
  return (
    // Fragment je <> ili React.Fragment
    <div>
      <h3
        style={{
          color: fontColor,
          fontSize: fontSize,
        }}
      >
        Hello, {name}
      </h3>
      <p>How are you?</p>
      {children}
    </div>
  );
};

export default Greeting;

// II nacin

// export default function Greeting() {

// };
