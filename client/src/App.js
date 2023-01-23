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
  // const [stores, setStores] = useState([]);
  const [movies, setMovies] = useState([]);
  // const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(()=>{
    fetch('/me').then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user))
          .then(fetch('/movies')
            .then(r => r.json())
            .then(movies => setMovies(movies))
      )}
    })
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/movies"><MoviesContainer user={user} movies={movies}/></Route>
          <Route path={"/movies/:id"}><MovieDetails movies={movies} /></Route>
          <Route path="/stores"><StoresContainer user={user}/></Route>
          <Route path="/stores/:id"><Store /></Route>
          <Route path="/rent"><RentalForm user={user} /></Route>
          <Route exact path="/"><Home user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} movies={movies}/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
