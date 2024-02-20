import { formatDate } from "../../utils/formatDate";
import { TripItem } from "../TripItem/TripItem";

export const TripList = ({ trips, getParams }) => {
  return (
    <>
      <ul>
        {trips.map((trip) => {
          return (
            <li
              key={trip.id}
              onClick={() => {
                getParams({
                  city: trip.city,
                  startDate: formatDate(trip.startDate),
                  endDate: formatDate(trip.endDate),
                });
              }}
            >
              <TripItem trip={trip} />
            </li>
          );
        })}
      </ul>
      <button type="button">Add trip</button>
    </>
  );
};
