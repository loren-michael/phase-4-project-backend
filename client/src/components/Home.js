import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import MovieDetails from './MovieDetails'

function Home({ user, setUser, loggedIn, setLoggedIn, movies }) {
  const movieOne = movies[5];
  const movieTwo = movies[12];
  const movieThree = movies[19];
  
  if (!user) return (
      <div className="login-block">
        <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Signup user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
    )

  return (
    <div>
      <br></br>
      <h3>Pick one of these movies or go to the <Link to="/movies">movies page</Link> to see more!</h3>
      <Card.Group>
        <Card href={`/movies/${movieOne.id}`}>
          <Link to={`/movies/${movieOne.id}`} element={<MovieDetails movie={movieOne} />}>
          <Image src={movieOne.poster_url} />
          <Card.Content>
            <Card.Header>{movieOne.title}</Card.Header>
            <div>{movieOne.year}</div>
            <Card.Description>{movieOne.summary}...</Card.Description>
          </Card.Content>
          </Link>
        </Card>
        <Card href={`/movies/${movieTwo.id}`}>
          <Link to={`/movies/${movieTwo.id}`} element={<MovieDetails movie={movieTwo} />}>
          <Image src={movieTwo.poster_url} />
          <Card.Content>
            <Card.Header>{movieTwo.title}</Card.Header>
            <div>{movieTwo.year}</div>
            <Card.Description>{movieTwo.summary}...</Card.Description>
          </Card.Content>
          </Link>
        </Card>
        <Card href={`/movies/${movieThree.id}`}>
          <Link to={`/movies/${movieThree.id}`} element={<MovieDetails movie={movieThree} />}>
          <Image src={movieThree.poster_url} />
          <Card.Content>
            <Card.Header>{movieThree.title}</Card.Header>
            <div>{movieThree.year}</div>
            <Card.Description>{movieThree.summary}...</Card.Description>
          </Card.Content>
          </Link>
        </Card>
      </Card.Group>
    </div>
  )
}

export default Home