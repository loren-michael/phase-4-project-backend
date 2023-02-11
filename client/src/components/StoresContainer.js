import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoresContext } from '../context/stores';

function StoresContainer({ store, setStore }) {
  const { stores, setStores } = useContext(StoresContext);

  useEffect(() => {
    fetch('/stores')
    .then(r => r.json())
    .then(stores => setStores(stores))
  }, [])

  return (
    
    <div>
      <br></br>
      <h3>Choose a location</h3>
      {stores.map(store => {
        return (
          <li key={store.address}>
            {/* <a href={`/stores/${store.id}`} value={store.id}>Store # {store.id} - {store.address}</a> */}
            <Link to={`/stores/${store.id}`} value={store.id}>Store # {store.id} - {store.address}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default StoresContainer