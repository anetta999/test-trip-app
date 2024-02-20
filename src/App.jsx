import { useEffect } from "react";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TripList } from "./components/TripList/TripList";
import { WeekList } from "./components/WeekList/WeekList";
import initialTrips from "./data/trips.json";
import { fetchTripForecast } from "./services/api";

function App() {
  const [trips, setTrips] = useState(initialTrips);
  const [filter, setFilter] = useState("");
  const [weeks, setWeeks] = useState([]);
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
        // console.log(days);
        setWeeks(days);
      } catch (error) {
        console.log(error);
      }
    };
    fetchForecast();
  }, [params]);

  return (
    <>
      <h1>Weather Forecast</h1>
      <SearchBar filter={filter} onSearch={searchTripsByCity} />
      <TripList trips={filteredTrips} getParams={getParams} />
      <h2>Week</h2>
      {weeks.length > 0 && <WeekList days={weeks} />}
    </>
  );
}

export default App;
