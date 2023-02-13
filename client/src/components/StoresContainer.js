import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoresContext } from '../context/stores';

function StoresContainer({ store, setStore }) {
  const [stores, setStores] = useContext(StoresContext);
  const [newStore, setNewStore] = useState({address: ""});
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch('/stores')
    .then(r => r.json())
    .then(stores => setStores(stores))
  }, [])

  function handleNewStore(e) {
    e.preventDefault()
    fetch('/stores', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newStore)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(data => setStores(data))
      } else {
        r.json().then(data => setErrors(data.errors))
      }
    })
  }

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
      <br></br>
      <form onSubmit={handleNewStore}>
        <label htmlFor="address">Address of New Store: </label>
        <input
          type="text"
          value={newStore.address}
          onChange={e => setNewStore({address: e.target.value})}
        />
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <ul>
        {errors.map(err => {
          return (
            <li key={err}>{err}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default StoresContainer