import React from "react";
import { useLocation, useParams } from "react-router-dom";

const SingleNews = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const articleNews = state.poslatiParametar;
};

export default SingleNews;
