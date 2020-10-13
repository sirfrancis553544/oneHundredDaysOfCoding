import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
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
  return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>;
};
