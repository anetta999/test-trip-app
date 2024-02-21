import { useEffect } from "react";
import { useState } from "react";

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
    }
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <>
      <div>
        <p>
          <span>{startDate ? days : "00"}</span>
          <span>Days</span>
        </p>
        <p>
          <span>{startDate ? hours : "00"}</span>
          <span>Hours</span>
        </p>
        <p>
          <span>{startDate ? minutes : "00"}</span>
          <span>Minutes</span>
        </p>
        <p>
          <span>{startDate ? seconds : "00"}</span>
          <span>Seconds</span>
        </p>
      </div>
    </>
  );
};
