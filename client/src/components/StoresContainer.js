import React, { useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Store from './Store';
import { StoresContext } from '../context/stores';

function StoresContainer({ store, setStore }) {
  const { stores, setStores } = useContext(StoresContext);
  // const [store, setStore] = useState({})


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
            {/* <Link to={`/stores/${store.id}`} element={<Store store={store} movies={movies} />} key={store.address} onClick={() => setStore(store)} >Store # {store.id} - {store.address}</Link> */}
            <a href={`/stores/${store.id}`} value={store.id}>Store # {store.id} - {store.address}</a>
          </li>
        )
      })}
    </div>
  )
}

export default StoresContainer