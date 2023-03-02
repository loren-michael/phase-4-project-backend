import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MoviesContext } from '../context/movies'
import '../styles.css'

function RentalForm({ activeRentals, setActiveRentals, rentalMovie, setRentalMovie }) {
  const [movies, setMovies] = useContext(MoviesContext);
  
  const [errors, setErrors] = useState([]);
  const [rental, setRental] = useState({
    movie_id: rentalMovie.id,
    title: rentalMovie.id,
    store_id: rentalMovie.store_id,
    days: 1
  })

  useEffect(() => {
    fetchActiveRentals()
    setRental({movie_id: rentalMovie.id, title: rentalMovie.title, store_id: rentalMovie.store_id, days: 1})
  }, [])

  useEffect(() => {
    const buildRental = {
      movie_id: rentalMovie.id,
      title: rentalMovie.title,
      store_id: rentalMovie.store_id,
      days: 1
    };
    setRental(buildRental);
  }, [rentalMovie])

  function fetchActiveRentals() {
    fetch('/rentals')
    .then(r => r.json())
    .then(rentals => setActiveRentals(rentals))
  }

  function handleReturn(e) {
    const returnRental = activeRentals.find(rental => rental.id == parseInt(e.target.value))
    console.log(returnRental.movie)
    const returnMovie = returnRental.movie
    fetch(`/rentals/${parseInt(e.target.value)}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(r => {
      if (r.ok) {
        r.json()
        .then(rentals => setActiveRentals(rentals));
        updateMovieAvailabilityTrue(returnMovie)
      } else {
        r.json().then(data => setErrors(data.errors))
      }
    })
  }

  function updateMovieAvailabilityTrue(returnMovie) {
    fetch(`/movies/${returnMovie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({availability: true})
    })
    .then(r => {
      if (r.ok) {
        returnMovie.availability = true;
        const newMovies = movies.map(movie => {
          if (movie.id === returnMovie.id) {
            return returnMovie
          } else {
            return movie
          }
        })
        setMovies(newMovies)
      } else {
        r.json().then(data => setErrors(data.errors))
      }
    })
  }



  function handleRentalStart(e) {
    e.preventDefault();
    fetch(`/rentals`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(rental)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(patchMovieAvailability())
      } else {
        r.json().then(data => setErrors(data.errors))
      }
    })
  }

  function patchMovieAvailability() {
    fetch(`/movies/${rental.movie_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({availability: false})
    })
    const updatedAvailability = movies.find(movie => movie.id === rentalMovie.id);
    updatedAvailability.availability = false;
    const newRentalMovies = movies.map(movie => {
      if (movie.id === updatedAvailability.id) {
        return updatedAvailability
      } else {
        return movie
      }
    })
    setMovies(newRentalMovies)
    const newActiveRentalMovie = {movie: rentalMovie}
    const updatedActiveRentals = [...activeRentals, newActiveRentalMovie]
    setActiveRentals(updatedActiveRentals)
    setRentalMovie({})
  }


  return (
    <div>
      <br></br>
      <br></br>
      <h2>Active Rentals</h2>
      <ul>
        {activeRentals.map(rental => {
          return (
            <li key={rental.movie.id} value={rental.id}> {rental.movie.title} rented for {rental.days} days. <button value={rental.id} id={rental.id} onClick={e => handleReturn(e)}>Return this movie</button></li>
          )
        })}
      </ul>
      <br></br>
      
      { rentalMovie.title ? 
        <div>
          <form>
            <h4>Begin rental of {rentalMovie.title}</h4>
            <label>Number of days:  $</label>
            <input 
              type="text" 
              value={rental.days}
              onChange={e => setRental({...rental, days: e.target.value})}
            />
            <button type="submit" value={rentalMovie.movie_id} onClick={e => handleRentalStart(e)} >Activate Rental</button>
          </form>
        </div>
          
        : <Link to="/movies">Choose a movie to rent</Link>
      }
      
      {errors.map(err => {
        return (
          <li key={err}>{err}</li>
        )
      })}
    </div>
  )
}

export default RentalForm