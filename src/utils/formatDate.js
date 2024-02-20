import { format } from "date-fns";

export const formatDate = (date) => {
  const [day, month, year] = date.split(".").map(Number);
  const fullYear = year < 50 ? 2000 + year : 1900 + year;

  const formattedDate = format(
    new Date(fullYear, month - 1, day),
    "yyyy-MM-dd"
  );

  return formattedDate;
};

export const getDayOfWeek = (date) => {
  const tripDate = new Date(date);
  const tripDay = tripDate.getDay();
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return daysOfWeek[tripDay];
};

export const formatTripDate = (date) => {
  const tripDate = new Date(date);
  return format(tripDate, "dd.MM.yy");
};

export const roundTemperature = (temp) => {
  return Math.round(temp);
};
