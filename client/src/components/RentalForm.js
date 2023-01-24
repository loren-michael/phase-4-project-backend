import React, { useState } from 'react'
// import { Card } from 'semantic-ui-react'

function RentalForm({ user, rentalMovie, setRentalMovie, movies }) {
  const [rental, setRental] = useState({
    // user_id: user.id,
    // movie_id: rentalMovie.id
  })

  function handleReturn(e) {
    // console.log(e.parentNode.parentNode)
  }

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Active Rentals</h1>
      <ul>
        {/* {user.rentals.map(rental => {
          return(
            <li>{rental.rental_summary}    <button onClick={handleReturn}> Return Movie </button></li>
          )
        })} */}
      </ul>
    </div>
  )
}

export default RentalForm