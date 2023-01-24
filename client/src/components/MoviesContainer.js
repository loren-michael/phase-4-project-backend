import '../styles.css';
import React from 'react';
import { Card } from 'semantic-ui-react';
import MovieCard from './MovieCard';

function MoviesContainer({ movies }) {

  return (
    <div>
      <br></br>
      <Card.Group className="movie-cards">
        {movies.map(movie => {
          return (<MovieCard key={movie.id} movie={movie} />)
        })}
      </Card.Group>
    </div>
  )
}

export default MoviesContainer