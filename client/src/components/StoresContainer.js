import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Store from './Store';

function StoresContainer({ stores, setStores }) {

  useEffect(() => {
    fetch('/stores')
    .then(r => r.json())
    .then(stores => setStores(stores))
  }, [])

  return (
    
    <div>
      <br></br>
      Choose a location
      {stores.map(store => {
        return (
          <li key={store.address}>
            <Link to={`/stores/${store.id}`} element={<Store store={store}/>} key={store.address}># {store.id} - {store.address}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default StoresContainer