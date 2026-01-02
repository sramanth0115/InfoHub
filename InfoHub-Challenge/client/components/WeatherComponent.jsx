// src/components/WeatherComponent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    axios.get("https://infohub-sakk.onrender.com/api/weather")
      .then(response => setWeather(response.data))
      .catch(error => console.log("Error fetching weather:", error));
  }, []);

  return (
    <div className="weather_card">
      <h2 className="weather_head">Weather in Hyderabad</h2>

      

      {weather ? (
        <div>
          <p className="weather_para"> Timezone : <span className="weather_span"> {weather.timezone} </span> </p> 
          <p className="weather_para"> Time : <span className="weather_span"> {weather.time.replace("T", ", ")} </span> </p>
          <p className="weather_para"> Temperature : <span className="weather_span"> {weather.temperature} </span> </p>   
        </div>
      ) : (
        <p className="weather_loading">Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
