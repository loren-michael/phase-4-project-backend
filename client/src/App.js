import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MoviesContext } from './context/movies';
// import { StoresContext } from './context/stores'; 
import NavBar from './components/NavBar';
import MoviesContainer from './components/MoviesContainer';
import MovieDetails from './components/MovieDetails';
import StoresContainer from './components/StoresContainer';
import Store from './components/Store';
import RentalForm from './components/RentalForm';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);
  const [store, setStore] = useState({})
  // const [stores, setStores] = useState([]);
  // const [movies, setMovies] = useState([]);
  const [rentalMovie, setRentalMovie] = useState({});
  // const [availableMovies, setAvailableMovies] = useState([]);
  const [activeRentals, setActiveRentals] = useState([])

  const [movies, setMovies] = useContext(MoviesContext);

  // const { stores, setStores } = useContext(StoresContext);

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


  return (
    <BrowserRouter>
    {/* <MoviesProvider> */}
      <div className="App">
        <NavBar user={user} setUser={setUser} setRentalMovie={setRentalMovie} movies={movies} />
        <Switch>
          <Route exact path="/movies">
            <MoviesContainer 
              fetchMovies={fetchMovies} 
              user={user} 
              // movies={movies} 
              // availableMovies={availableMovies}
            />
          </Route>
          <Route path={"/movies/:id"}>
            <MovieDetails 
              // movies={movies} 
              setRentalMovie={setRentalMovie} 
            />
          </Route>
          <Route exact path="/stores">
            <StoresContainer 
              user={user} 
              store={store}
              setStore={setStore}
              // stores={stores} 
              // setStores={setStores}
            />
          </Route>
          <Route path={"/stores/:id"}>
            <Store store={store} setStore={setStore} />
          </Route>
          <Route path="/rent">
            <RentalForm 
              user={user} 
              // movies={movies} 
              // setMovies={setMovies} 
              // availableMovies={availableMovies} 
              rentalMovie={rentalMovie} 
              setRentalMovie={setRentalMovie} 
              activeRentals={activeRentals}
              setActiveRentals={setActiveRentals}
              fetchMovies={fetchMovies}
            />
          </Route>
          <Route exact path="/">
            <Home 
              user={user} 
              setUser={setUser} 
              // movies={movies} 
              fetchMovies={fetchMovies}
            />
          </Route>
        </Switch>
      </div>
    {/* </MoviesProvider> */}
    </BrowserRouter>
  );
}

export default App;
