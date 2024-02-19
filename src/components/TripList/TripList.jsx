import { format } from "date-fns";
import { TripItem } from "../TripItem/TripItem";

const formatDate = (date) => {
  const [day, month, year] = date.split(".").map(Number);
  const fullYear = year < 50 ? 2000 + year : 1900 + year;

  const formattedDate = format(
    new Date(fullYear, month - 1, day),
    "yyyy-MM-dd"
  );

  return formattedDate;
};

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
