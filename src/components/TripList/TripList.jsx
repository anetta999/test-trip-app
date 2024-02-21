import { formatDate } from "../../utils/formatDate";
import { TripItem } from "../TripItem/TripItem";
import { AddBtn, CityList, TripWrap } from "./TripList.styled";
import { AiOutlinePlus } from "react-icons/ai";

export const TripList = ({ trips, getParams }) => {
  return (
    <>
      <TripWrap>
        <CityList>
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
        </CityList>
        <AddBtn type="button">
          <AiOutlinePlus />
          Add trip
        </AddBtn>
      </TripWrap>
    </>
  );
};
