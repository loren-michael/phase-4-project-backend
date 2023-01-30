import React, { useState, useEffect } from 'react'

function RentalForm({ user, movies, availableMovies, rentalMovie, setRentalMovie }) {
  const [activeRentals, setActiveRentals] = useState([]); 
  const [rental, setRental] = useState({
    movie_id: rentalMovie.id,
    title: rentalMovie.id
  })

  useEffect(() => {
    fetchActiveRentals()
  }, [user])

  function fetchActiveRentals() {
    fetch('/rentals')
    .then(r => r.json())
    .then(rentals => setActiveRentals(rentals))
  }

  function handleReturn(e) {
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
    .then(fetchActiveRentals())
  }

  function handleMovieSelection(e) {
    const newMovie = movies.find(movie => parseInt(movie.id) === parseInt(e.target.value))
    setRentalMovie(newMovie)
    // console.log((newMovie))
  }

  useEffect(() => {
    setRental({
      movie_id: rentalMovie.id
    })
    console.log("from useeffect", rental)
  }, [rentalMovie])

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
      </ul>
      <br></br>
      <form>
        <h4>Start a new Rental</h4>
        <select 
          required 
          name="rental-movie" 
          value={rentalMovie} 
          onChange={e => handleMovieSelection(e)}
        >
          <option></option>
          {availableMovies.map(movie => {
            return <option key={movie.id} value={movie.id}>{movie.title}</option>
          })}
        </select>
      </form>
      <h4>Begin rental of {rentalMovie.title}</h4><button>Activate Rental</button>
    </div>
  )
}

export default RentalForm