import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

function RentalForm({ user, movies, setMovies, availableMovies, rentalMovie, setRentalMovie, fetchMovies }) {
  const [activeRentals, setActiveRentals] = useState([]);
  const [errors, setErrors] = useState([]);
  const [rental, setRental] = useState({
    movie_id: rentalMovie.id,
    title: rentalMovie.id
  })

  useEffect(() => {
    fetchActiveRentals()
    // setRental({movie_id: rentalMovie.id, title: rentalMovie.title})
  }, [])

  function fetchActiveRentals() {
    fetch('/rentals')
    .then(r => r.json())
    .then(rentals => setActiveRentals(rentals))
  }

  function handleReturn() {
    console.log("handle return")
  }

  function handleRentalStart() {
    console.log(rentalMovie)
    console.log("handle rental start")
  }


  return (
    <div>
      <br></br>
      <br></br>
      <h2>Active Rentals</h2>
      <ul>
        {activeRentals.map(rental => {
          return (
            <li key={rental.movie.id} value={rental.index}> {rental.movie.title} <button value={rental.id} id={rental.id} onClick={handleReturn}>Return this movie</button></li>
          )
        })}
      </ul>
      <br></br>
      {/* <form>
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
      </form> */}
      
      { rentalMovie.title ? <div><h4>Begin rental of {rentalMovie.title}</h4><button value={rentalMovie.movie_id} onClick={handleRentalStart} >Activate Rental</button></div> : <Link to="/movies">Choose a movie to rent</Link> }
      
      {errors.map(err => {
        return (
          <li key={err.message}>{err.message}</li>
        )
      })}
    </div>
  )
}

export default RentalForm