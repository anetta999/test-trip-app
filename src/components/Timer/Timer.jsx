import { useEffect } from "react";
import { useState } from "react";
import { Time, TimerWrap, Number } from "./Timer.styled";

export const Timer = ({ startDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = startDate;

  const setTime = () => {
    if (deadline) {
      const time = Date.parse(deadline) - Date.now();

      setDays(Math.max(Math.floor(time / (1000 * 60 * 60 * 24))));
      setHours(Math.max(Math.floor((time / (1000 * 60 * 60)) % 24)));
      setMinutes(Math.max(Math.floor((time / 1000 / 60) % 60)));
      setSeconds(Math.max(Math.floor((time / 1000) % 60)));
    } else {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <>
      <TimerWrap>
        <p>
          <Number>{startDate ? days : "00"}</Number>
          <Time>Days</Time>
        </p>
        <p>
          <Number>{startDate ? hours : "00"}</Number>
          <Time>Hours</Time>
        </p>
        <p>
          <Number>{startDate ? minutes : "00"}</Number>
          <Time>Minutes</Time>
        </p>
        <p>
          <Number>{startDate ? seconds : "00"}</Number>
          <Time>Seconds</Time>
        </p>
      </TimerWrap>
    </>
  );
};
