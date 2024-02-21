import { WeekItem } from "../WeekItem/WeekItem";

export const WeekList = ({ days }) => {
  return (
    <>
      <ul>
        {days.slice(0, 7).map((day) => {
          return (
            <li key={day.datetimeEpoch}>
              <WeekItem day={day} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
