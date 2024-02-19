import { TripItem } from "../TripItem/TripItem";

export const TripList = ({ trips }) => {
  return (
    <>
      <ul>
        {trips.map((trip) => {
          return (
            <li key={trip.id}>
              <TripItem trip={trip} />
            </li>
          );
        })}
      </ul>
      <button type="button">Add trip</button>
    </>
  );
};
