import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Incrementer from "./components/Incrementer/Incrementer";

const DATA = [
  "Prva recenica",
  "Druga recenica",
  "Treca recenica",
  "Cetvrta recenica",
  "...",
  "Stota recenica",
];

function App6() {
  const [array, setArray] = useState(DATA);
  // 1.
  const generateNewWord = () => Math.random().toString(36).slice(2, 7);
  // 2.
  const reverseArray = () => {
    const _array = [...array];
    const reversed = _array.reverse();
    setArray(reversed);
  };

  return (
    <div className="card-container">
      <button onClick={() => setArray((prev) => [generateNewWord(), ...prev])}>
        Dodaj random recenicu
      </button>
      <button onClick={reverseArray}>REVERSE recenica</button>
      <ul>
        {array.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App6;
