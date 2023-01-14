import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Signup from './components/Signup';
// import Login from './components/Login';
import MoviesContainer from './components/MoviesContainer';
import StoresContainer from './components/StoresContainer';
import Home from './components/Home'

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    fetch("/me").then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} />
        <Switch>
          <Route path="/movies"><MoviesContainer /></Route>
          <Route path="/stores"><StoresContainer /></Route>
          <Route exact path="/"><Home user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
