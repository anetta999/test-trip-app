import { CityImg, CityWrap } from "./TripItem.styled";

export const TripItem = ({ trip }) => {
  const { img, city, startDate, endDate } = trip;
  return (
    <>
      <CityImg src={img} alt={city} />
      <CityWrap>
        <h3>{city}</h3>
        <p>{`${startDate}-${endDate}`}</p>
      </CityWrap>
    </>
  );
};
