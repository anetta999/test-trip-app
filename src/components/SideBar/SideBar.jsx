import { getDayOfWeek, roundTemperature } from "../../utils/formatDate";
import { getWeatherIcon } from "../../utils/generateWeatherIcons";

export const SideBar = ({ todayForecast, city }) => {
  const { datetime, icon, temp } = todayForecast;
  const weatherIcon = getWeatherIcon(icon);
  return (
    <>
      <h3>{getDayOfWeek(datetime)}</h3>
      {weatherIcon && <img src={weatherIcon} alt={icon} />}
      <p>{roundTemperature(temp)}&#8451;</p>
      <p>{city}</p>
    </>
  );
};
