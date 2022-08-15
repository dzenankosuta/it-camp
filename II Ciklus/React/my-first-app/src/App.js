import React from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Incrementer from "./components/Incrementer/Incrementer";

function App() {
  const [count, setCount] = React.useState(0);
  const handleClick2 = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    alert("Ova se funkcija nalazi u App.js");
  };

  const sayHello = (namee) => {
    alert(`Hello ${namee}`);
  };

  // let count = 0;

  return (
    <div className="card-container">
      {/* <button onClick={() => sayHello("John")}>Click me</button>{" "} */}
      {/* Primena funkcije onClick sa argumentom */}
      {/* <button
        onClick={() => {
          sayHello("John");
          console.log("Anonimna funkcija");
        }}
      >
        {/* Primena funkcije onClick sa argumentom i primena neke anonimne funkcije */}
      {/* Inline anonymus function
      </button> */}

      {count}
      <button onClick={handleClick2}>Increase</button>
      <Greeting name={"Dzenan"} handleParentClick={handleClick} />
      <Incrementer />
    </div>
  );
}

export default App;
