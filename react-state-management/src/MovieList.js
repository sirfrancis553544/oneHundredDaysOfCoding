import React, { useState } from "react";
import Movie from "./Movie";

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
  return (
    <div>
      {movies.map((movie) => (
          <Movie name={movie.name} price={movie.price} key={movie.id}/>
      ))}
    </div>
  );
};

export default MovieList;
