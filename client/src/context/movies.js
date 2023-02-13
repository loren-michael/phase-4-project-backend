import React, { createContext, useState } from "react";

const MoviesContext = createContext(null);

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  const value = [movies, setMovies]

  return (
    <MoviesContext.Provider value={value}>
      { children }
    </MoviesContext.Provider>)
}

export { MoviesProvider, MoviesContext }
