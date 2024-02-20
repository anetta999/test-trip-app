import {
  formatTripDate,
  getDayOfWeek,
  roundTemperature,
} from "../../utils/formatDate";
import { getWeatherIcon } from "../../utils/generateWeatherIcons";

export const WeekItem = ({ day }) => {
  const { icon, tempmax, tempmin, datetime } = day;
  const weatherIcon = getWeatherIcon(icon);

  return (
    <>
      <h3>{formatTripDate(datetime)}</h3>
      <h4>{getDayOfWeek(datetime)}</h4>
      {weatherIcon && <img src={weatherIcon} alt={icon} />}
      <p>{`${roundTemperature(tempmax)}\u00B0/${roundTemperature(
        tempmin
      )}\u00B0`}</p>
    </>
  );
};
