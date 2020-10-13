import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 21234,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 34343,
    },
    {
      name: "Inception",
      price: "$10",
      id: 43422,
    },
  ]);

  return movies.map((movie) => <li>{movie.name}</li>);
};

export default MovieList;
