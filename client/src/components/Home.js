import React from 'react'
import Login from './Login'
import Signup from './Signup'
// import { Link } from 'react-router-dom'
// import { Card, Image } from 'semantic-ui-react'
// import MovieDetails from './MovieDetails'
import MoviesContainer from './MoviesContainer'

function Home({ user, setUser, loggedIn, setLoggedIn, movies, fetchMovies }) {
  // const movieOne = movies[5];
  // const movieTwo = movies[12];
  // const movieThree = movies[19];
  
  if (!user) return (
      <div className="login-block">
        <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Signup user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
    )

  return (
    <div>
      <br></br>
      <MoviesContainer movies={movies} fetchMovies={fetchMovies} />
    </div>
  )
}

export default Home