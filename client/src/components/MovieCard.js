import React from 'react'

function MovieCard({ movie }) {
  return (
    <div>
      <h4>{movie.title}</h4>
      <div>{movie.year}</div>
      <p>{movie.summary}</p>
    </div>
  )
}

export default MovieCard