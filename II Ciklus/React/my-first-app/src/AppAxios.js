import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://api.quotable.io";

function App() {
  const [authors, setAuthors] = useState([]);

  function getQuote() {
    axios.get(`${BASE_URL}/random`).then((res) => console.log(res.data));
  }
  function getAuthors() {
    try {
      axios
        .get(`${BASE_URL}/authors?sortBy=quoteCount`)
        .then((res) => setAuthors(res.data.results));
    } catch (e) {
      alert(e);
    }
  }
  useEffect(() => {
    getAuthors();
  }, []);
  return (
    <div className="card-container">
      {authors.length > 0 ? (
        authors.map((author) => (
          <div>
            {author._id}
            <h4>{author.name}</h4>
            <h5>{author.description}</h5>
            <p>{author.bio}</p>
            <p>Quote count: {author.quoteCount}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
