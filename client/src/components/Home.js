import React from 'react'
import Login from './Login'
import Signup from './Signup'
import MoviesContainer from './MoviesContainer'

function Home({ user, setUser, fetchMovies }) {
  
  if (!user) return (
      <div className="login-block">
        <Login user={user} setUser={setUser} />
        <Signup user={user} setUser={setUser} />
      </div>
    )

  return (
    <div>
      <br></br>
      <MoviesContainer fetchMovies={fetchMovies} />
    </div>
  )
}

export default Home