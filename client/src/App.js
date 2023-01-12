import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import MoviesContainer from './components/MoviesContainer';
import StoresContainer from './components/StoresContainer';
import Home from './components/Home'

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState({});

  // useEffect(()=>{
  //   fetch("/me")
        // 
  // }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} />
        <Switch>
          <Route path="/signup"><Signup /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/movies"><MoviesContainer /></Route>
          <Route path="/stores"><StoresContainer /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
