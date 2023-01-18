import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar({ user, setUser }) {

  function handleLogout(e) {
    e.preventDefault();
    fetch('/logout', {
      method: "DELETE"
    })
    .then(setUser(null))
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
        Welcome to Flatiron Movies!<br></br>
        <Link to="/">Click here to Log In or Sign Up</Link>
      </div>
    )
  }
};

export default NavBar