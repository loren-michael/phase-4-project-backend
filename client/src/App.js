import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MoviesContainer from './components/MoviesContainer';
import Movie from './components/Movie';
import StoresContainer from './components/StoresContainer';
import Store from './components/Store';
import RentalForm from './components/RentalForm';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [stores, setStores] = useState({});
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch('/me').then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user))
          .then(fetch('/stores')
            .then(r => r.json())
            .then(stores => setStores(stores))
            .then(console.log(stores))
      )}
    })
  }, [])



  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/movies"><MoviesContainer user={user} stores={stores}/></Route>
          <Route path="/movies/:id"><Movie /></Route>
          <Route path="/stores"><StoresContainer user={user} stores={stores}/></Route>
          <Route path="/stores/:id"><Store /></Route>
          <Route path="/rent"><RentalForm user={user} /></Route>
          <Route exact path="/"><Home user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
