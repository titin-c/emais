import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MovieContext from "../context/MovieContext";

const Search = () => {
  const [value, setValue] = useState("");
  const { fetchMoviesByQueryType, fetchSearch, page } = useContext(MovieContext);

  const navigate = useNavigate();

  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
      const searchQuery = value.trim();
      if (searchQuery === "popular") {
        fetchMoviesByQueryType(page);
      } else {
        fetchSearch(searchQuery, page);
      }
      navigate("/");
      setValue("");
    }
  };

  return (
    <div className="header-search active">
      <input
      className="search"
        type="text"
        id="search"
        placeholder="Buscar Película..."
        onKeyDown={(e) => onKeyUp(e)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
