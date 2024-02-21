import { getDayOfWeek, roundTemperature } from "../../utils/formatDate";
import { getWeatherIcon } from "../../utils/generateWeatherIcons";
import { Day, IconWrap, Temp, Location } from "./SideBar.styled";

export const SideBar = ({ todayForecast, city }) => {
  const { datetime, icon, temp } = todayForecast;
  const weatherIcon = getWeatherIcon(icon);
  return (
    <>
      <Day>{getDayOfWeek(datetime)}</Day>
      <IconWrap>
        {weatherIcon && <img src={weatherIcon} alt={icon} />}
        <Temp>
          {roundTemperature(temp)}
          <span>&#8451;</span>
        </Temp>
      </IconWrap>
      <Location>{city}</Location>
    </>
  );
};
