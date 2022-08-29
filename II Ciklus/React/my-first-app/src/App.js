import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://api.quotable.io";

function App() {
  const [authors, setAuthors] = useState([]);
  const [pagination, setPagination] = useState({});

  function getAuthors(page) {
    axios
      .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}&limit=15`)
      .then((res) => {
        setPagination({
          page: res.data.page,
          lastPage: res.data.totalPages,
        });
        setAuthors(res.data.results);
      });
  }

  useEffect(() => {
    getAuthors(1);
  }, [pagination.page]);

  return (
    <div className="card-container">
      <h1>
        Page {1} of {pagination.lastPage}
      </h1>
      {authors.length > 0 ? (
        authors.map((author) => (
          <div key={author._id}>
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
