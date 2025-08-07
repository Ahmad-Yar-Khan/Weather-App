import { useState } from "react";
import {
  WiDaySunny,
  WiHumidity,
  WiStrongWind,
  WiCloudy,
  WiThermometer,
  WiBarometer,
} from "react-icons/wi";
import { FaCity, FaFlag } from "react-icons/fa";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    const res = await fetch("http://localhost:3000/api/weather", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city }),
    });

    const data = await res.json();
    setWeatherData(data);
  };

  return (
    <div className="container">
      <h1 className="title">Weather Forecast</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && weatherData.main && (
        <div className="card">
          <h2>
            <FaCity /> {weatherData.name} <FaFlag /> {weatherData.sys.country}
          </h2>
          <div className="row">
            <WiThermometer size={40} />
            <p>
              <strong>Temperature:</strong> {weatherData.main.temp}°C
            </p>
          </div>
          <div className="row">
            <WiDaySunny size={40} />
            <p>
              <strong>Feels Like:</strong> {weatherData.main.feels_like}°C
            </p>
          </div>
          <div className="row">
            <WiCloudy size={40} />
            <p>
              <strong>Cloudiness:</strong> {weatherData.clouds.all}%
            </p>
          </div>
          <div className="row">
            <WiStrongWind size={40} />
            <p>
              <strong>Wind:</strong> {weatherData.wind.speed} m/s
            </p>
          </div>
          <div className="row">
            <WiHumidity size={40} />
            <p>
              <strong>Humidity:</strong> {weatherData.main.humidity}%
            </p>
          </div>
          <div className="row">
            <WiBarometer size={40} />
            <p>
              <strong>Pressure:</strong> {weatherData.main.pressure} hPa
            </p>
          </div>
          <div className="row">
            <p>
              <strong>Weather:</strong> {weatherData.weather[0].main} -{" "}
              {weatherData.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
