import '../styles.css';
import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import MovieCard from './MovieCard';

function MoviesContainer({ movies, fetchMovies }) {
  const [filtered, setFiltered] = useState(false)
  const [displayMovies, setDisplayMovies] = useState(movies)
  const [filteredMovies, setFilteredMovies] = useState([])

  // if (movies.length === 0) {
  //   fetchMovies()
  // }

  function handleFilterToggle() {
    setFiltered(!filtered)
    filtered ? setDisplayMovies(movies) : setDisplayMovies(filteredMovies)
  }

  // useEffect(() => {
  //   if (movies.length === 0) {
  //     fetchMovies()
  //   }
  //   const availableMovies = [];
  //   movies.map((movie) => {
  //     if (movie.availability) {
  //       availableMovies.push(movie)
  //     }
  //     return availableMovies
  //   })
  //   setFilteredMovies(availableMovies)
  // }, [movies])


  return (
    <>
    <br></br>
      <button onClick={handleFilterToggle}>{filtered ? "Show all movies" : "Show available movies"}</button>
      <br></br>
      <br></br>
      <Card.Group className="movie-cards">
        {displayMovies.map(movie => {
          return (<MovieCard key={movie.id} movie={movie} />)
        })}
      </Card.Group>
    </>
  )
}

export default MoviesContainer