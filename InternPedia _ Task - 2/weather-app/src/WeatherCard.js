import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
  const { name, weather, main, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="weather-icon"
      />
      <h3>{weather[0].description}</h3>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels like: {main.feels_like}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
