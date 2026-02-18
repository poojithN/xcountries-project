import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect,useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch("https://xcountries-backend.labs.crio.do/all")
    .then((response) => response.json())
    .then((data) => {
        setCountries(data);
      })
    .catch((error)=>console.log("Error fetching data:",error))
},[]);
  return (
      <div className="App">
      {countries.map((country, i) => (
        <div key={i} className='c-card'>
          <img
            src={country.flag}
            alt={country.name}
            className='c-flag'
          />
          <p className='c-name'>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
