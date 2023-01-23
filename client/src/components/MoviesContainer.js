import '../styles.css';
import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import MovieCard from './MovieCard';

function MoviesContainer({ movies }) {
  const [filtered, setFiltered] = useState(false)
  const [displayMovies, setDisplayMovies] = useState(movies)
  const [filteredMovies, setFilteredMovies] = useState([])

  function handleFilterToggle() {
    setFiltered(!filtered)
    filtered ? setDisplayMovies(movies) : setDisplayMovies(filteredMovies)
  }

  useEffect(() => {
    const availableMovies = [];
    movies.map((movie) => {
      if (movie.availability) {
        availableMovies.push(movie)
      }
      return availableMovies
    })
    setFilteredMovies(availableMovies)
  }, [movies])


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