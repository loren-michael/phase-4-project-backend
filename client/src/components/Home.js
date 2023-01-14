import React from 'react'
import Login from './Login'
import Signup from './Signup'

function Home({ user, setUser, loggedIn, setLoggedIn }) {
  
  if (!user) return (
      <div className="login-block">
        <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Signup user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
    )

  return (
    <div>
      {user.username}
    </div>
  )
}

export default Home