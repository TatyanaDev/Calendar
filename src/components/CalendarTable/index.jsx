import { isToday } from "date-fns";
import { getDaysOfMonth } from "./utils/date-helpers";
import style from "./calendar-table.module.scss";

const CalendarTable = ({ year }) => {
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const daysOfMonth = getDaysOfMonth(year);

  return (
    <table className={style.calendarTable}>
      <thead>
        <tr>
          {daysOfWeek.map((dayOfWeek, index) => (
            <th key={index} className={style.dayOfWeek}>
              {dayOfWeek}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {daysOfMonth.map((daysOfWeek, index) => (
          <tr key={index}>
            {daysOfWeek.map((dayOfWeek, index) => (
              <td
                key={index}
                className={`${style.dayOfMonth} ${
                  isToday(new Date(dayOfWeek)) && style.today
                }`}
              >
                {dayOfWeek?.getDate()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarTable;
