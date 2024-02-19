// PN2VHMS4V4TT53KHFXAN7ZC2A
import axios from "axios";

const API_KEY = "PN2VHMS4V4TT53KHFXAN7ZC2A";

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export const fetchTripForecast = async ({ city, startDate, endDate }) => {
  const { data } = await axios.get(
    `${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
  );

  return data;
};

export const fetchCityForecast = async (city) => {
  const { data } = await axios.get(
    `${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
  );

  return data;
};
