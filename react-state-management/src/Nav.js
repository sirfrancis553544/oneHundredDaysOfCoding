import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./App.css";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
      <h3>Daniel Francis</h3>
      <p>List of Movies: {movies.length} </p>
    </nav>
  );
};

export default Nav;
