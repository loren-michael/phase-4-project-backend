import React, { useEffect, useContext } from 'react'
import { MoviesContext } from '../context/movies'

function Store({ store }) {
  const { movies } = useContext(MoviesContext);
  
  console.log(store)
  
  
  return (
    <div>
      <h3>Movies available at Store # {store.id}</h3>
    </div>
  )
}

export default Store