import React, { useState, useEffect } from 'react'

function RentalForm({ user, movies, availableMovies, rentalMovie, setRentalMovie }) {
  const [activeRentals, setActiveRentals] = useState([]); 
  const [rental, setRental] = useState({
    movie_id: rentalMovie.id,
    store_id: rentalMovie.store_id
  })
  const [returnErrors, setReturnErrors] = useState([])

  useEffect(() => {
    fetch('/rentals')
      .then(r => r.json())
      .then(rentals => setActiveRentals(rentals))
  }, [user])

  function handleReturn(e) {
    console.log("return function")
    // change movie availability
    // patch to /movies/:id and call fetchMovies()
    fetch(`/movies/${e.target.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        availability: true
      })
    })
    .then(fetch(`/rentals/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }))
    // console.log(e.target.id)
  }

  function handleChangeRentalMovie(e) {
    
  }

  return (
    <div>
      <br></br>
      <br></br>
      <h2>Active Rentals</h2>
      <ul>
        {activeRentals.map(rental => {
          return (
            <li key={rental.movie.id}>{rental.movie.title} <button value={rental.movie.id} id={rental.id} onClick={handleReturn}>Return this movie</button></li>
          )
        })}
        {returnErrors.map(error => {
          return (
            <li>{error}</li>
          )
        })}
      </ul>
      <br></br>
      <form>
        <h4>Start a new Rental</h4>
        <select 
          required 
          name="rental-movie" 
          value={rentalMovie.movie_id} 
          // onChange={e => setRental({...rental, movie_id: e.target.value})}
          onChange={e => handleChangeRentalMovie(e)}
        >
          <option></option>
          {availableMovies.map(movie => {
            return <option key={movie.id} value={movie.id}>{movie.title}</option>
          })}
        </select>
      </form>
      {/* <h4>Begin rental of {rentalMovie.title}</h4> */}
    </div>
  )
}

export default RentalForm