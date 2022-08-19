import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Incrementer from "./components/Incrementer/Incrementer";

function App5() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [hobi, setHobi] = useState("");

  const [userInput, setUserInput] = useState({
    namee: "",
    email: "",
    hobi: "",
  });

  return (
    <div className="card-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userInput.namee);
          console.log(userInput.email);
          console.log(userInput.hobi);
        }}
      >
        <label htmlFor="html">Name</label>
        <input
          type="text"
          id="html"
          name="fav_language"
          value={userInput.namee}
          onChange={(event) =>
            setUserInput((prev) => ({
              ...prev,
              namee: event.target.value,
            }))
          }
        />
        <br />
        <label htmlFor="css">Email</label>
        <input
          type="email"
          id="css"
          name="fav_language"
          value={userInput.email}
          onChange={(event) =>
            setUserInput((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
        />
        <br />
        <label htmlFor="javascript">Hobi</label>
        <input
          type="text"
          id="javascript"
          name="fav_language"
          value={userInput.hobi}
          onChange={(event) =>
            setUserInput((prev) => ({
              ...prev,
              hobi: event.target.value,
            }))
          }
        />
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  );
}

export default App5;
