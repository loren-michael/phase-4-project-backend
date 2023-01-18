import React from 'react'
// import { Link } from 'react-router-dom'

function StoresContainer({ stores }) {
  return (
    
    <div>
      <br></br>
      Choose a location
      {stores.map(store => {
        return <li key={store.address}>{store.address}</li>
      })}
    </div>
  )
}

export default StoresContainer