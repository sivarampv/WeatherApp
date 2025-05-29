import React, { useState } from 'react';
import axios from 'axios'; // corrected import
import './App.css';

const API_key = 'cb28a2235e98849c9d1148d1ba9c75aa';

const App = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`); // corrected template literals
      setData(response.data);
    } catch (err) {
      alert('Enter the city name');
    }
  };

  return (
    <div className='App'>
      <h1 className='Title'>Weather App</h1>
      <div className='container'>
        <h3>Enter the City Name:</h3> {/* Move the label above the input field */}
        <div className='input-container'>
          <input
            type="text"
            className='input'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="city name"
          />
          <button className='button' onClick={fetchData}>
            Fetch
          </button>
        </div>
        <div>
          {data && (
            <div>
              <h2>{data.name}</h2>
              <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
              <p>Weather: {data.weather[0].main}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
