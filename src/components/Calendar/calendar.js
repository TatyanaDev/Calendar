const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Month = {
  Январь: 0,
  Февраль: 1,
  Март: 2,
  Апрель: 3,
  Май: 4,
  Июнь: 5,
  Июль: 6,
  Август: 7,
  Сентябрь: 8,
  Октябрь: 9,
  Ноябрь: 10,
  Декабрь: 11,
};

export function areEqual(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export function getDaysInMonth(date) {
  if (isLeapYear(date.getFullYear()) && date.getMonth() === Month.Февраль) {
    return DAYS_IN_MONTH[date.getMonth()] + 1;
  } else {
    return DAYS_IN_MONTH[date.getMonth()];
  }
}

export function getDayOfWeek(date) {
  if (date.getDay() === 0) return 6;
  return date.getDay() - 1;
}

export function getMonthData(year, month) {
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;
  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];
    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }
  return result;
}
