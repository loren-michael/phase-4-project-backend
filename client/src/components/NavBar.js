import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

function NavBar({ user, setUser, setRentalMovie }) {
  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    fetch('/logout', {
      method: "DELETE"
    })
    .then(setUser(null))
    .then(setRentalMovie({}))
    .then(history.push("/"))
  }

  if (user) {
    return (
      <div>
        <h2>Welcome back, {user.username}!</h2>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/rent"> Rentals </NavLink>
        <NavLink to="/stores"> Stores </NavLink>
        <NavLink to="/movies"> Movies </NavLink>
        <Link onClick={handleLogout}> Logout </Link>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Welcome to Flatiron Movies!</h1>
        <Link to="/">Click here to Log In or Sign Up</Link>
        <br></br>
        <br></br>
      </div>
    )
  }
};

export default NavBar