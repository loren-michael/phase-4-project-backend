import '../styles.css';
import React, { useEffect, useContext, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { MoviesContext } from '../context/movies'
import MovieCard from './MovieCard';

function Store() {
  const [movies, setMovies] = useContext(MoviesContext);

  const history = useHistory()

  const params = useParams()
  const [storeMovies, setStoreMovies] = useState([])
  const [toggleForm, setToggleForm] = useState(false)
  const [errors, setErrors] = useState([])

  const [newMovie, setNewMovie] = useState({
    store_id: params.id,
    poster_url: "",
    title: "",
    year: null,
    synopsis: "",
    mpaa: "",
    availability: true
  })

  useEffect(() => {
    const storeMoviesArr = movies.filter(movie => movie.store_id == params.id)
    setStoreMovies(storeMoviesArr)
  }, [params, movies])

  function handleAddMovie(e) {
    e.preventDefault();
    fetch(`/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newMovie)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(movie => {
          setMovies([...movies, movie])
          history.push(`/movies/${movie.id}`)
        })
        .then(handleToggleForm())
      } else {
        r.json().then(data => setErrors(data.errors))
      }
    })
  }

  function handleToggleForm() {
    setToggleForm(toggleForm => !toggleForm)
  }

  return (
    <div>
      <br></br>
      <h3>Movies at Store # {params.id}</h3>
      <Card.Group className="movie-cards">
        {storeMovies.map(movie => {
          return (<MovieCard key={movie.id} movie={movie} />)
        })}
      </Card.Group>
      <br></br>
      { toggleForm ? <button onClick={handleToggleForm}> Add a movie to this store </button> : 
        <div>
          <form id="new-movie-form" onSubmit={handleAddMovie}>
            <label>Title: </label>
            <input
              type="text"
              value={newMovie.title}
              onChange={e => setNewMovie({...newMovie, title: e.target.value})}
            />
            <br></br>
            <label>Poster URL: </label>
            <input
              type="url"
              value={newMovie.poster_url}
              onChange={e => setNewMovie({...newMovie, poster_url: e.target.value})}
            />
            <br></br>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">Search themoviedb.org for a poster image</a>
            <br></br>
            <label>Year: </label>
            <input
              type="text"
              value={newMovie.year}
              onChange={e => setNewMovie({...newMovie, year: e.target.value})}
            />
            <br></br>
            <label>MPAA: </label>
            <select
              required
              type="text"
              value={newMovie.mpaa}
              onChange={e => setNewMovie({...newMovie, mpaa: e.target.value})}
            >
              <option></option>
              <option>G</option>
              <option>PG</option>
              <option>PG-13</option>
              <option>R</option>
              <option>NC-17</option>
            </select>
            <br></br>
            <label>Runtime in Minutes: </label>
            <input
              type="text"
              value={newMovie.runtime}
              onChange={e => setNewMovie({...newMovie, runtime: e.target.value})}
            />
            <br></br>
            <label>Synopsis: </label>
            <textarea
              type="text"
              value={newMovie.synopsis}
              onChange={e => setNewMovie({...newMovie, synopsis: e.target.value})}
            />
            <br></br>
            <button type="submit">Submit this movie</button>
          </form>
          <br></br>
      <ul>
        {errors.map(err => {
          return (
            <li key={err}>{err}</li>
          )
        })}
      </ul>
      <br></br>
          <button onClick={handleToggleForm}> Hide Form </button>
        </div>
      }
      <br></br>
    </div>
  )
}

export default Store