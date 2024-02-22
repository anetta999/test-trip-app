import { getCityImage } from "../../utils/generateCityImages";
import { CityImg, CityWrap } from "./TripItem.styled";

export const TripItem = ({ trip }) => {
  const { city, startDate, endDate } = trip;
  return (
    <>
      <CityImg src={getCityImage(city)} alt={city} />
      <CityWrap>
        <h3>{city}</h3>
        <p>{`${startDate}-${endDate}`}</p>
      </CityWrap>
    </>
  );
};
