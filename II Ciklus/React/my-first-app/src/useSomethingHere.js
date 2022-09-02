import React, { useState, useEffect } from "react";
import axios from "axios";

export const useSomethingHere = (url) => {
  const [authors, setAuthors] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);

  function getAuthors(page) {
    setLoading(true);
    axios
      .get(`${url}/authors?sortBy=quoteCount&page=${page}&limit=15`)
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

  return {
    authors,
    setAuthors,
    pagination,
    setPagination,
    loading,
    setLoading,
  };
};
