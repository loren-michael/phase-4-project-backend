import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function MovieCard({ movie }) {

  const movieSummary = movie.synopsis.substring(0,79)

  return (
    <Card color={ movie.availability ? "green" : "red" } href={`/movies/${movie.id}`}>
      <Image src={movie.poster_url} />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <div>{movie.year}</div>
        <Card.Description>{movie.summary ? movie.summary : movieSummary}...</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default MovieCard