import React from 'react'
import Login from './Login'
import Signup from './Signup'
import MoviesContainer from './MoviesContainer'

function Home({ user, setUser, movies, fetchMovies }) {
  
  if (!user) return (
      <div className="login-block">
        <Login user={user} setUser={setUser} movies={movies} />
        <Signup user={user} setUser={setUser} />
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