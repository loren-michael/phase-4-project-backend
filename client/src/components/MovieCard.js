import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import MovieDetails from './MovieDetails';

function MovieCard({ movie }) {
  return (
    <Card color={ movie.availability ? "green" : "red" } href={`/movies/${movie.id}`}>
      <Link to={`/movies/${movie.id}`} element={<MovieDetails movie={movie} />}>
      <Image src={movie.poster_url} />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <div>{movie.year}</div>
        <Card.Description>{movie.summary}...</Card.Description>
      </Card.Content>
      </Link>
    </Card>
  )
}

export default MovieCard