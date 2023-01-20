import React from 'react'
import { Card } from 'semantic-ui-react'
import MovieCard from './MovieCard'

function MoviesContainer({ movies }) {
  return (
    <Card.Group>
      {movies.map(movie => {
      return (<MovieCard key={movie.id} movie={movie} />)
    })}
    </Card.Group>
    
  )
}

export default MoviesContainer