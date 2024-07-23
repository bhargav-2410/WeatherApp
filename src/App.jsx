import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "332585ef9629f666c67ac0e7fcd9ab78";

  const getWeatherInfo = async (city) => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    let result = {
      city: city,
      feels_like: jsonResponse.main.feels_like,
      temp: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description,
    };
    setWeatherInfo(result);
  };

  return (
    <div>
      <SearchBox getWeatherInfo={getWeatherInfo} />
      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}

export default App;
