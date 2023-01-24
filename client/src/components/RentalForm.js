import React, { useState, useEffect } from 'react'

function RentalForm({ user, movies, availableMovies, rentalMovie, setRentalMovie }) {
  const [activeRentals, setActiveRentals] = useState([]); 
  const [rental, setRental] = useState({
    movie_id: rentalMovie.id
  })

  useEffect(() => {
    fetch('/rentals')
      .then(r => r.json())
      .then(rentals => setActiveRentals(rentals))
  }, [user])

  function handleReturn(e) {
    console.log("return function")
  }

  return (
    <div>
      <br></br>
      <br></br>
      <h2>Active Rentals</h2>
      <ul>
        {activeRentals.map(rental => {
          return (
            <li key={rental.movie.id}>{rental.movie.title}</li>
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
          onChange={e => setRental({...rental, movie_id: e.target.value})}
        >
          {availableMovies.map(movie => {
            return <option key={movie.id} value={movie.id}>{movie.title}</option>
          })}
        </select>
      </form>
    </div>
  )
}

export default RentalForm