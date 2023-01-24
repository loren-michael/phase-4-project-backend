import React, { useState } from 'react'
// import { Card } from 'semantic-ui-react'

function RentalForm({ user, rentalMovie, setRentalMovie, movies }) {
  const [rental, setRental] = useState({
    // user_id: user.id,
    // movie_id: rentalMovie.id
  })

  function handleReturn(e) {
    
  }

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Active Rentals</h1>
      <ul>

      </ul>
      <form>
        <h4>Start a new Rental</h4>
        <select>
          <option></option>
        </select>
      </form>
    </div>
  )
}

export default RentalForm