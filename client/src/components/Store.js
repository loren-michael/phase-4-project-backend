import '../styles.css';
import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { MoviesContext } from '../context/movies'
import MovieCard from './MovieCard';

function Store({ stores, store }) {
  const { movies } = useContext(MoviesContext);
  const params = useParams()
  const [storeMovies, setStoreMovies] = useState([])

  // const storeMoviesArr = movies.filter(movie => movie.store_id == params.id)

  useEffect(() => {
    const storeMoviesArr = movies.filter(movie => movie.store_id == params.id)
    setStoreMovies(storeMoviesArr)
  }, [params])

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