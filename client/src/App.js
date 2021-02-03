import axios from 'axios';
// import { weather_api_key, city } from './config';
import { useState, useEffect } from 'react';

function App() {
  // console.log(`your api key is: ${weather_api_key}`);
  const [weather, setWeather] = useState({});
  useEffect(() => {
    function getWeather() {
      // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}`;
      const URL = '/api';
      axios.get(URL)
        .then(resp => {
          console.log(resp.data);
          setWeather(resp.data);
        })
      }
      getWeather();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>
      The current wind speed in {weather.name} is:
      <br />{ weather && weather.wind && weather.wind.speed}
      </h2>
    </div>
  );
}

export default App;
