import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MoviesContainer from './components/MoviesContainer';
import MovieDetails from './components/MovieDetails';
import StoresContainer from './components/StoresContainer';
import Store from './components/Store';
import RentalForm from './components/RentalForm';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [stores, setStores] = useState([]);
  const [movies, setMovies] = useState([]);
  const [rentalMovie, setRentalMovie] = useState({});
  const [availableMovies, setAvailableMovies] = useState([]);

  useEffect(()=>{
    fetch('/me').then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user))
      }
    })
    .then(fetchMovies())
  }, [])

  function fetchMovies() {
    fetch('/movies')
    .then(r => r.json())
    .then(movies => setMovies(movies))
  }

  useEffect(() => {
    const arr = [];
    movies.map(movie => {
      if (movie.availability) {
        arr.push(movie)
      }
    })
    setAvailableMovies(arr)
  }, [movies])

  // const processReturn = () => {
  //   fetch('/rentals', {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     },
  //     body: JSON.stringify({})
  //   })
  // }

  // const processRental = () => {
  //   fetch('/rentals', {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     },
  //     body: JSON.stringify({})
  //   })
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} setUser={setUser} setRentalMovie={setRentalMovie} />
        <Switch>
          <Route exact path="/movies"><MoviesContainer fetchMovies={fetchMovies} user={user} movies={movies} availableMovies={availableMovies}/></Route>
          <Route path={"/movies/:id"}><MovieDetails movies={movies} setRentalMovie={setRentalMovie} /></Route>
          <Route path="/stores"><StoresContainer user={user} stores={stores} setStores={setStores}/></Route>
          <Route path="/stores/:id"><Store /></Route>
          <Route path="/rent"><RentalForm user={user} movies={movies} setMovies={setMovies} availableMovies={availableMovies} rentalMovie={rentalMovie} setRentalMovie={setRentalMovie} fetchMovies={fetchMovies}/></Route>
          <Route exact path="/"><Home user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} movies={movies} fetchMovies={fetchMovies}/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
