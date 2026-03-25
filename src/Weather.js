import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind,
      description: response.data.condition.description,
      city: response.data.city,
    });
    setReady(true);
  }

  const apiKey = "bf602aabco34t729377499af62121a7a";
  let city = "New York";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city...."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>

        <br />

        <ul>
          <li>Wednesday 01:00</li>
          <li>Cloudy</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
              alt="Cloudy"
            />

            <span className="temperature">3</span>
            <span className="temperature-unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 10%</li>
              <li>Humidity: 30%</li>
              <li>Wind: 50 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading......";
  }
}
