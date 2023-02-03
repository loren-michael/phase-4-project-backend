import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

function RentalForm({ user, movies, setMovies, availableMovies, rentalMovie, setRentalMovie, fetchMovies }) {
  const [activeRentals, setActiveRentals] = useState([]);
  const [errors, setErrors] = useState([]);
  const [rental, setRental] = useState({
    movie_id: rentalMovie.id,
    title: rentalMovie.id,
    store_id: rentalMovie.store_id
  })

  // useEffect(() => {
  //   fetchActiveRentals()
  //   // setRental({movie_id: rentalMovie.id, title: rentalMovie.title})
  // }, [])

  useEffect(() => {
    const buildRental = {
      movie_id: rentalMovie.id,
      title: rentalMovie.title,
      store_id: rentalMovie.store_id
    }
    setRental(buildRental)
  }, [rentalMovie])

  // function fetchActiveRentals() {
  //   fetch('/rentals')
  //   .then(r => r.json())
  //   .then(rentals => setActiveRentals(rentals))
  // }

  function handleReturn() {
    console.log("handle return")
  }


  function handleRentalStart(e) {
    console.log("handle rental start")    
    console.log(rental)
    console.log(user)
    // POST a new rental
    // fetch(`/rentals`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     "accept": "application/json"
    //   },
    //   body: JSON.stringify(rental)
    // })
    // .then(r => {
    //   if (r.ok) {
    //     r.json().then(patchMovieAvailability())
    //   } else {
    //     r.json().then(data => setErrors(data.errors))
    //   }
    // })
  }


  function patchMovieAvailability() {
    console.log("patch movie availability")
    // ONLY DO THESE THINGS IF THE RENTAL IS SUCCESSFUL!
    // set rental movie's availbility to false to map into movies state
    const updatedAvailability = rentalMovie
    updatedAvailability.availability = false
    // map through movies and replace movie with updated availability record
    const newRentalMovies = movies.map(movie => {
      if (movie.id === updatedAvailability.id) {
        return updatedAvailability
      } else {
        return movie
      }
    })
    // set the movies state to reflect updated availability on all pages
    setMovies(newRentalMovies)
    
    // add the same rental info to the active rentals state in the correct format
    const updatedActiveRentals = activeRentals
    const newActiveRentalMovie = {movie: rentalMovie}
    updatedActiveRentals.push(newActiveRentalMovie)
    setActiveRentals(updatedActiveRentals)

    // change the rental button to either disappear or turn into a link back to choose a movie
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