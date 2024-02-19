export const TripItem = ({ trip }) => {
  const { img, city, startDate, endDate } = trip;
  return (
    <>
      <img src={img} alt={city} width="200" height="200" />
      <h2>{city}</h2>
      <p>{`${startDate}-${endDate}`}</p>
    </>
  );
};
