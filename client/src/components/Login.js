import React, { useState } from 'react'

function Login({ setUser, setActiveRentals }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleLogin(e) {
    e.preventDefault();
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          setUser(user)
          const userRentals = [user.rentals]
          setActiveRentals(userRentals)
        })
      } else {
        r.json().then(data => {
          setErrors(data.errors)
        })
      }
    })
  }


  return (
    <div className="login">
      <h2>Log In</h2>
      <form onSubmit={ handleLogin }>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
            type="text"
            name="username"
            id="username"
            value={ username }
            onChange={ e => setUsername(e.target.value) }
          />
          <br></br>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
          <br></br>
        </div>
        <input type="submit" value="Login" />
      </form>
      <ul>
        { errors.map(err => {
          return (
            <li key={err}>{err}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Login