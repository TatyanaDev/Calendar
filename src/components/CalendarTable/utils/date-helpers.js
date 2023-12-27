import { getDaysInMonth, getMonth } from "date-fns";

const getDayOfWeek = (date) => (date.getDay() === 0 ? 6 : date.getDay() - 1);

export const getDaysOfMonth = (year) => {
  const monthOfYear = getMonth(new Date());
  const date = new Date(year, monthOfYear);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  const daysInWeek = 7;
  const days = [];
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / daysInWeek; i++) {
    days[i] = [];

    for (let j = 0; j < daysInWeek; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        days[i][j] = null;
      } else {
        days[i][j] = new Date(year, monthOfYear, day++);
      }
    }
  }

  return days;
};
