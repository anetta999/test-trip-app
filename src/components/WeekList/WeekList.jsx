import { WeekItem } from "../WeekItem/WeekItem";
import { DaysList } from "./WeekList.styled";

export const WeekList = ({ days }) => {
  return (
    <>
      <DaysList>
        {days.slice(0, 7).map((day) => {
          return (
            <li key={day.datetimeEpoch}>
              <WeekItem day={day} />
            </li>
          );
        })}
      </DaysList>
    </>
  );
};
