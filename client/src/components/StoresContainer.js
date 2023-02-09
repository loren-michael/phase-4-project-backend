import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Store from './Store';

function StoresContainer({ stores, setStores, movies }) {

  useEffect(() => {
    fetch('/stores')
    .then(r => r.json())
    .then(stores => console.log(stores))
  }, [])

  return (
    
    <div>
      <br></br>
      <h3>Choose a location</h3>
      {stores.map(store => {
        return (
          <li key={store.address}>
            <Link to={`/stores/${store.id}`} element={<Store store={store} movies={movies} />} key={store.address}>Store # {store.id} - {store.address}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default StoresContainer