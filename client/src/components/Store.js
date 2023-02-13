import '../styles.css';
import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { MoviesContext } from '../context/movies'
import MovieCard from './MovieCard';

function Store() {
  const [movies, setMovies] = useContext(MoviesContext);

  const params = useParams()
  const [storeMovies, setStoreMovies] = useState([])

  useEffect(() => {
    const storeMoviesArr = movies.filter(movie => movie.store_id == params.id)
    setStoreMovies(storeMoviesArr)
  }, [params, movies])

  return (
    <div>
      <br></br>
      <h3>Movies at Store # {params.id}</h3>
      <Card.Group className="movie-cards">
        {storeMovies.map(movie => {
          return (<MovieCard key={movie.id} movie={movie} />)
        })}
      </Card.Group>
    </div>
  )
}

export default Store