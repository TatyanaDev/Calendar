import { getDate } from "date-fns";
import style from "./current-day.module.scss";

const CurrentDay = () => {
  const dayOfWeek = new Date().toLocaleString("en-US", { weekday: "long" });
  const date = getDate(new Date());

  return (
    <article className={style.currentDayContainer}>
      <h1 className={style.dayOfWeekTitle}>{dayOfWeek}</h1>
      <p className={style.date}>{date}</p>
    </article>
  );
};

export default CurrentDay;
