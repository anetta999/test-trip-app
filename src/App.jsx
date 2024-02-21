import { useEffect } from "react";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SideBar } from "./components/SideBar/SideBar";
import { Timer } from "./components/Timer/Timer";
import { TripList } from "./components/TripList/TripList";
import { WeekList } from "./components/WeekList/WeekList";
import initialTrips from "./data/trips.json";
import { fetchCityForecast, fetchTripForecast } from "./services/api";

function App() {
  const [trips, setTrips] = useState(initialTrips);
  const [filter, setFilter] = useState("");
  const [weeks, setWeeks] = useState([]);
  const [todayForecast, setTodayForecast] = useState({});
  const [params, setParams] = useState({
    city: "",
    startDate: "",
    endDate: "",
  });

  const searchTripsByCity = (value) => {
    setFilter(value);
  };

  const getParams = (value) => {
    setParams(value);
  };

  const filteredTrips = trips.filter((trip) =>
    trip.city.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        if (!params) {
          return;
        }
        const { days } = await fetchTripForecast(params);
        setWeeks(days);
      } catch (error) {
        console.log(error);
      }
    };
    fetchForecast();
  }, [params]);

  useEffect(() => {
    const fetchForecastForTripCity = async () => {
      try {
        if (!params.city) {
          return;
        }
        const { days } = await fetchCityForecast(params.city);
        setTodayForecast(days[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchForecastForTripCity();
  }, [params.city]);

  return (
    <>
      <h1>Weather Forecast</h1>
      <SearchBar filter={filter} onSearch={searchTripsByCity} />
      <TripList trips={filteredTrips} getParams={getParams} />
      <h2>Week</h2>
      {weeks.length > 0 && <WeekList days={weeks} />}
      <aside>
        {todayForecast && params.startDate ? (
          <SideBar
            todayForecast={todayForecast}
            city={params.city}
            startDate={params.startDate}
          />
        ) : (
          <p>
            Please, choose the city, you'd like to travel to, to see its today's
            weather
          </p>
        )}
        <Timer startDate={params.startDate} />
      </aside>
    </>
  );
}

export default App;
