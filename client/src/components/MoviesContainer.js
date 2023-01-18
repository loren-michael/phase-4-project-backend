import React from 'react'
import MovieCard from './MovieCard'

function MoviesContainer({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
      return (<MovieCard movie={movie} />)
    })}
    </ul>
    
  )
}

export default MoviesContainer