import { formatDate } from "../../utils/formatDate";
import { TripItem } from "../TripItem/TripItem";
import { AddBtn, CityList, TripWrap } from "./TripList.styled";
import { AiOutlinePlus } from "react-icons/ai";
import { CreateTripModal } from "../CreateTripModal/CreateTripModal";
import { useState } from "react";

export const TripList = ({ trips, getParams, addTrip }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };
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
        <AddBtn type="button" onClick={toggleModal}>
          <AiOutlinePlus />
          Add trip
        </AddBtn>
      </TripWrap>
      {isModalOpen && (
        <CreateTripModal
          isModalOpen={isModalOpen}
          onClose={toggleModal}
          addTrip={addTrip}
        />
      )}
    </>
  );
};
