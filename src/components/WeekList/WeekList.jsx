import { WeekItem } from "../WeekItem/WeekItem";

export const WeekList = ({ days }) => {
  return (
    <>
      <ul>
        {days.map((day) => {
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
