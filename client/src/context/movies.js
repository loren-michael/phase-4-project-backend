import React, { createContext, useState } from "react";

const MoviesContext = createContext(null);

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      { children }
    </MoviesContext.Provider>)
}

export { MoviesProvider, MoviesContext }
