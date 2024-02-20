import clearDay from "../assets/weather-images/clear-day.png";
import clearNight from "../assets/weather-images/clear-night.png";
import cloudy from "../assets/weather-images/cloudy.png";
import fog from "../assets/weather-images/fog.png";
import partlyCloudyDay from "../assets/weather-images/partly-cloudy-day.png";
import partlyCloudyNight from "../assets/weather-images/partly-cloudy-night.png";
import rain from "../assets/weather-images/rain.png";
import snow from "../assets/weather-images/snow.png";
import wind from "../assets/weather-images/wind.png";

export const getWeatherIcon = (icon) => {
  switch (icon) {
    case "partly-cloudy-day":
      return partlyCloudyDay;
    case "snow":
      return snow;
    case "rain":
      return rain;
    case "fog":
      return fog;
    case "wind":
      return wind;
    case "cloudy":
      return cloudy;
    case "partly-cloudy-night":
      return partlyCloudyNight;
    case "clear-day":
      return clearDay;
    case "clear-night":
      return clearNight;

    default:
      return null;
  }
};
