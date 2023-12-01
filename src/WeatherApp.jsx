import SearchBox from "./SearchBox";
import Infobox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 19.15,
    humidity: 82,
    temp: 19.05,
    tempMax: 19.05,
    tempMin: 19.05,
    weather: "rainy",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App By Zishan</h2>
      <SearchBox updateInfo={updateInfo}/>
      <Infobox info={WeatherInfo} />
    </div>
  );
}
