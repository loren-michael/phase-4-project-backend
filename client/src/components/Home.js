import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import MovieDetails from './MovieDetails'

function Home({ user, setUser, loggedIn, setLoggedIn, movies }) {
  
  if (!user) return (
      <div className="login-block">
        <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Signup user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
    )

  return (
    <div>
      <Card.Group>
        <Card href={`/movies/${movies[5].id}`}>
          <Link to={`/movies/${movies[5].id}`} element={<MovieDetails movie={movies[5]} />}>
          <Image src={movies[5].poster_url} />
          <Card.Content>
            <Card.Header>{movies[5].title}</Card.Header>
            <div>{movies[5].year}</div>
            <Card.Description>{movies[5].summary}...</Card.Description>
          </Card.Content>
          </Link>
        </Card>
        <Card href={`/movies/${movies[12].id}`}>
          <Link to={`/movies/${movies[12].id}`} element={<MovieDetails movie={movies[12]} />}>
          <Image src={movies[12].poster_url} />
          <Card.Content>
            <Card.Header>{movies[12].title}</Card.Header>
            <div>{movies[12].year}</div>
            <Card.Description>{movies[12].summary}...</Card.Description>
          </Card.Content>
          </Link>
        </Card>
        <Card href={`/movies/${movies[19].id}`}>
          <Link to={`/movies/${movies[19].id}`} element={<MovieDetails movie={movies[19]} />}>
          <Image src={movies[19].poster_url} />
          <Card.Content>
            <Card.Header>{movies[19].title}</Card.Header>
            <div>{movies[19].year}</div>
            <Card.Description>{movies[19].summary}...</Card.Description>
          </Card.Content>
          </Link>
        </Card>
      </Card.Group>
    </div>
  )
}

export default Home