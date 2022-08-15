import React from "react";
import "./Incrementer.css";

const Incrementer = () => {
  const [counter, setCounter] = React.useState(0);
  const handleIncreaseCounter = () => {
    setCounter(counter + 1);
  };
  const handleDecreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="buttons">
      <button onClick={handleDecreaseCounter} disabled={counter === 0}>
        -
      </button>
      <p>{counter}</p>
      <button onClick={handleIncreaseCounter}>+</button>
    </div>
  );
};

export default Incrementer;
