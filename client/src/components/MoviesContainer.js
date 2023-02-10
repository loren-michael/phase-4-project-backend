import '../styles.css';
import React, { useContext } from 'react';
import { Card } from 'semantic-ui-react';
import { MoviesContext } from '../context/movies'
import MovieCard from './MovieCard';

function MoviesContainer() {
  const { movies } = useContext(MoviesContext);

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