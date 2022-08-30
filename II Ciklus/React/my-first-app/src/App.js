import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://api.quotable.io";

function App() {
  const [authors, setAuthors] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);

  function getAuthors(page) {
    setLoading(true);
    axios
      .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}&limit=15`)
      .then((res) => {
        setPagination({
          page: res.data.page,
          lastPage: res.data.totalPages,
        });
        setAuthors(res.data.results);
        setLoading(false);
      });
  }

  useEffect(() => {
    getAuthors(pagination.page);
  }, [pagination.page]);

  return (
    <div className="card-container">
      <h2>
        Page {pagination.page} of {pagination.lastPage}
      </h2>
      <button
        onClick={() =>
          setPagination((prev) => ({
            ...prev,
            page: pagination.page > 1 ? pagination.page-- : 1,
          }))
        }
      >
        Previous page
      </button>
      <button
        onClick={() =>
          setPagination((prev) => ({
            ...prev,
            page:
              pagination.page < pagination.lastPage
                ? pagination.page++
                : pagination.lastPage,
          }))
        }
      >
        Next page
      </button>
      {!loading ? (
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
