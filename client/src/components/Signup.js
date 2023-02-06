import React, { useState } from 'react'

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSignup(e) {
    e.preventDefault();
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(user => {
            setUser(user)
          })
        } else {
          r.json().then(data => {
            setErrors(data.errors)
          })
        }
      })
  };


  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={ handleSignup }>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
            type="text"
            name="username"
            id="su-username"
            value={ username }
            onChange={ e => setUsername(e.target.value) }
          />
          <br></br>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="su-password"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
          <br></br>
          <label htmlFor="passwordConfirmation">Confirm Password: </label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            value={ passwordConfirmation }
            onChange={ e => setPasswordConfirmation(e.target.value) }
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
      <div>
        <ul className="error-list">
          {errors.map(err => {
            return <li key={err}>{err}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Signup