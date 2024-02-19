import { useState } from "react";
import { TripList } from "./components/TripList/TripList";
import initialTrips from "./data/trips.json";

function App() {
  const [trips, setTrips] = useState(initialTrips);
  return (
    <>
      <h1>Weather Forecast</h1>
      <TripList trips={trips} />
    </>
  );
}

export default App;
